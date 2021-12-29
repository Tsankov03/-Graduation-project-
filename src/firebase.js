import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDzD_dEtLn_xcE8a-IUT8QkoJifnWAgs7Y",
    authDomain: "reactcha-dda57.firebaseapp.com",
    projectId: "reactcha-dda57",
    storageBucket: "reactcha-dda57.appspot.com",
    messagingSenderId: "728594526035",
    appId: "1:728594526035:web:41feb8022b550669857ba6"
  })
  .auth();
