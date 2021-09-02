// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmPTEqPEqt2B-E-wdzJu4zqp3vUZlgZa0",
  authDomain: "weather-app-47486.firebaseapp.com",
  projectId: "weather-app-47486",
  storageBucket: "weather-app-47486.appspot.com",
  messagingSenderId: "5211012278",
  appId: "1:5211012278:web:346cd1ecd8cf8382dcfa17",
  measurementId: "G-JKEWSM5RH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
