import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    
    
    
    apiKey: "AIzaSyDIP-Em3gm0r1TnFqwJdx8XhU90gVwdPAA",
  authDomain: "messenger-2ba95.firebaseapp.com",
  databaseURL: "https://messenger-2ba95-default-rtdb.firebaseio.com",
  projectId: "messenger-2ba95",
  storageBucket: "messenger-2ba95.appspot.com",
  messagingSenderId: "1004376542171",
  appId: "1:1004376542171:web:8023f945ad61e24283b5fe",
  measurementId: "G-FSMBTE6G4B"

})

const db = firebaseApp.firestore();

export default db;
