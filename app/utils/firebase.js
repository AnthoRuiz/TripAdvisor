import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBsTl0P8AV7hoLQOGfnnCT9kjdlXcAi67k",
    authDomain: "tenedores-724aa.firebaseapp.com",
    databaseURL: "https://tenedores-724aa.firebaseio.com",
    projectId: "tenedores-724aa",
    storageBucket: "tenedores-724aa.appspot.com",
    messagingSenderId: "317887817363",
    appId: "1:317887817363:web:1a93314158baf8a1124f66"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);