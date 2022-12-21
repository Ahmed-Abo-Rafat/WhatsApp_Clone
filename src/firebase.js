import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvGjskdYhgnBqjM2x9c7Uw30_xU3dNliA",
    authDomain: "whatsapp-clone-30ea1.firebaseapp.com",
    projectId: "whatsapp-clone-30ea1",
    storageBucket: "whatsapp-clone-30ea1.appspot.com",
    messagingSenderId: "979100349501",
    appId: "1:979100349501:web:e9a4f121bccefb00b52654",
    measurementId: "G-LMVPWTC8GK"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;