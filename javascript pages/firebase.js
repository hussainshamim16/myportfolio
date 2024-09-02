
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// console.log(getFirestore)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7PEnEHPtLch2vDru_p2UWrhzlOJKKMI4",
    authDomain: "newapp-hackathon.firebaseapp.com",
    projectId: "newapp-hackathon",
    storageBucket: "newapp-hackathon.appspot.com",
    messagingSenderId: "695579857571",
    appId: "1:695579857571:web:144db68436a2cd08f66516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    db
    , collection,
    addDoc
    , getDocs
    , doc
}