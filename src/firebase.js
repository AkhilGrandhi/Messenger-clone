import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCznB_qBeJZof5bz3EelbEb16NnRM3UCWM",
    authDomain: "messenger-clone-27117.firebaseapp.com",
    databaseURL: "https://messenger-clone-27117.firebaseio.com",
    projectId: "messenger-clone-27117",
    storageBucket: "messenger-clone-27117.appspot.com",
    messagingSenderId: "1042150331494",
    appId: "1:1042150331494:web:5a428b75051d8b539c09a7",
    measurementId: "G-WM3WCNC8K4"

})

const db = firebaseApp.firestore();

export default db;