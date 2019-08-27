import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiOK6qcGjs43YK1TpHqAqNMsjhLv07454",
    authDomain: "ecommerce-67795.firebaseapp.com",
    databaseURL: "https://ecommerce-67795.firebaseio.com",
    projectId: "ecommerce-67795",
    storageBucket: "",
    messagingSenderId: "57365390096",
    appId: "1:57365390096:web:207d2c64eeec141b"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;