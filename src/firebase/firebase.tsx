import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDuDuwUOcOGGAYK5DHitV2UKkAD2vBiFlc",
    authDomain: "todobase-7a2f7.firebaseapp.com",
    databaseURL: "https://todobase-7a2f7.firebaseio.com",
    projectId: "todobase-7a2f7",
    storageBucket: "todobase-7a2f7.appspot.com",
    messagingSenderId: "125018624536",
    appId: "1:125018624536:web:74bf486df794683777296d"
})


export { firebaseConfig as firebase };