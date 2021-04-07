import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzB8ODgO994cfh8mALWEsDsIv9iAFwzIs",
    authDomain: "facebook-messenger-clone-12732.firebaseapp.com",
    projectId: "facebook-messenger-clone-12732",
    storageBucket: "facebook-messenger-clone-12732.appspot.com",
    messagingSenderId: "445821063254",
    appId: "1:445821063254:web:fc97cda892f048c3ddabf7",
    measurementId: "G-E9SY6ECMYV"
  });

  const db = firebaseApp.firestore();

  export default db;