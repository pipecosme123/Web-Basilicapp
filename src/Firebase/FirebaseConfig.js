import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
    apiKey: "AIzaSyCHbXtVq9PC74vxPWmnL56UCWqJIFu-AAU",
    authDomain: "loginprueba-3e627.firebaseapp.com",
    projectId: "loginprueba-3e627",
    storageBucket: "loginprueba-3e627.appspot.com",
    messagingSenderId: "584043704915",
    appId: "1:584043704915:web:e2c6a249d2fac38eab4ca6",
    measurementId: "G-BHM4435P4C"
});

export default app;