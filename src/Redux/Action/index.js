import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import Firestore , { FirebaseAuth, GoogleProvider, storage } from "../../Firebase"
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from "./actionType";
import { collection } from "firebase/firestore";



export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
})

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
})

export const getArticles = (payload) => {
  return({
   type : GET_ARTICLES ,
   payload : payload ,
 })
}

export const signInAPI = () => {
  return (dispatch) => {
    signInWithPopup(FirebaseAuth, GoogleProvider)
      .then((payload) => {
        dispatch(setUser(payload.user))
      })
      .catch((error) => alert(error.message));
  };
};

export const getUserAuth = () => {
  return (dispatch) => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } 
      else {
        dispatch(setUser(null));
      }
    });
  };
};

export const signOutAPI = () => {
  return (dispatch) => {
    signOut(FirebaseAuth, GoogleProvider)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};



export const postArticleAPI = (payload) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      if (payload.image) {
        const uploadTask = storage.ref(`images/${payload.image.name}`).put(payload.image);
        
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Progress: ${progress}%`);
            if (snapshot.state === 'running') {
              console.log(`Progress: ${progress}%`);
            }
          },
          (error) => {
            console.log(error.code);
          },
          async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            
            collection(Firestore, "articles").add({
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              video: payload.video,
              sharedImg: downloadURL,
              comments: 0,
              description: payload.description,
            });

            dispatch(setLoading(false));
          }
        );
      } else if (payload.video) {
        collection(Firestore, "articles").add({
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          video: payload.video,
          sharedImg: '',
          comments: 0,
          description: payload.description,
        });

        dispatch(setLoading(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };
}


export const getArticlesAPI = () => {
  return (dispatch) => {
      let payload;

      collection(Firestore, "articles")
          .orderBy("actor.date", "desc")
          .onSnapshot((snapshot) => {
              payload = snapshot.docs.map((doc) => doc.data());
              dispatch(getArticles(payload));
          });
  };
}