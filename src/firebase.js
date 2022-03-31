import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBCp2ItE5wWnlZvspZt8l3Vv3atkmL0xPo",
    authDomain: "gradchat-app.firebaseapp.com",
    projectId: "gradchat-app",
    storageBucket: "gradchat-app.appspot.com",
    messagingSenderId: "880721918108",
    appId: "1:880721918108:web:19f4f3ead5938b880a5559"
  })
  .auth();
