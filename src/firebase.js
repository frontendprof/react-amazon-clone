
import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBGKF_mxsKkcXZY3NREVS_SodKzztQjy_0",
    authDomain: "clone-da7c5.firebaseapp.com",
    projectId: "clone-da7c5",
    storageBucket: "clone-da7c5.appspot.com",
    messagingSenderId: "508474261635",
    appId: "1:508474261635:web:c3d5317920caaa87195bb6",
    measurementId: "G-4GXMLZJB1F"
})


const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}