import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyB8PFkip3btfoDpvSMr6yl0u8gSPRAFztA",
    authDomain: "react-journal-app-be3c9.firebaseapp.com",
    projectId: "react-journal-app-be3c9",
    storageBucket: "react-journal-app-be3c9.appspot.com",
    messagingSenderId: "676616905447",
    appId: "1:676616905447:web:8ca161ae57b4e03a333842"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
