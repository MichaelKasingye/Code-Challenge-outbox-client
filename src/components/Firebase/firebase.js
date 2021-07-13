import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyBfOiVvGEKbWlfzip4NOgS3uVWHlzYzQV0",
    authDomain: "challengecodeoutbox.firebaseapp.com",
    projectId: "challengecodeoutbox",
    storageBucket: "challengecodeoutbox.appspot.com",
    messagingSenderId: "845990247280",
    appId: "1:845990247280:web:1c3a606477704c74432db5",
    measurementId: "G-5GG9Q6ZW33"
     
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{db, auth, storage};