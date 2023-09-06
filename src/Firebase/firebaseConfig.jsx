// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVNXOYcw-s-WfmuSvbLBIPrx9Zv116y5w",
    authDomain: "ibos-task-for-intern-911ca.firebaseapp.com",
    projectId: "ibos-task-for-intern-911ca",
    storageBucket: "ibos-task-for-intern-911ca.appspot.com",
    messagingSenderId: "688924660308",
    appId: "1:688924660308:web:7458a4cb521d39c6be13c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;