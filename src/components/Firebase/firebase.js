import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyCMuBipTWD9L8R-lU3n_kv8n3VAFySD3gE",
    authDomain: "ecommerce-3b623.firebaseapp.com",
    projectId: "ecommerce-3b623",
    storageBucket: "ecommerce-3b623.appspot.com",
    messagingSenderId: "88818567063",
    appId: "1:88818567063:web:1723619ef0db88b494e6d2",
    measurementId: "G-WSEVVWLDES"
     
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{db, auth, storage};