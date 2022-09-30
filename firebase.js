// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUHK00GX7IJTxHgY7pUKNBaoPqlitl4Qk",
  authDomain: "haylo-sub-trackers.firebaseapp.com",
  projectId: "haylo-sub-trackers",
  storageBucket: "haylo-sub-trackers.appspot.com",
  messagingSenderId: "254760075480",
  appId: "1:254760075480:web:3c7bf9330b2f4f65ed17ad",
  measurementId: "G-0Z0847XEG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);