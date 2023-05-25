import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes , getDownloadURL } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAjNjQ2ywYI_z08aqIBNDNWkigooWafFCg",
  authDomain: "linkedin-clone-45f41.firebaseapp.com",
  projectId: "linkedin-clone-45f41",
  storageBucket: "linkedin-clone-45f41.appspot.com",
  messagingSenderId: "545643167573",
  appId: "1:545643167573:web:a7a7795a234e482fa9b9dc"
};


const FirebaseApp = initializeApp(firebaseConfig)
const Firestore = getFirestore(FirebaseApp)
const FirebaseAuth = getAuth(FirebaseApp)
const GoogleProvider = new GoogleAuthProvider()
const storage = getStorage(FirebaseApp)


export {FirebaseAuth , GoogleProvider , storage}
export default Firestore ;