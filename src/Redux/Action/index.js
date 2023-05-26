import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { FirebaseAuth, GoogleProvider } from "../../Firebase"
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from "./actionType";


export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
})

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
})

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
      } else {
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

