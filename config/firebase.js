
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import Constants from 'expo-constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// the apiKey is not secret , acceptable to be shared and on github repo
const firebaseConfig = {
  apiKey: "AIzaSyB0pr1FTrmTQ20qVjJLtQAiNvPKFCvjRLA",
  authDomain: "demo1-10664.firebaseapp.com",
  projectId: "demo1-10664",
  storageBucket: "demo1-10664.appspot.com",
  messagingSenderId: "947876007835",
  appId: "1:947876007835:web:2348aeffd8eb0611f71b3e",
};

console.log("firebaseConfig = " , firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
