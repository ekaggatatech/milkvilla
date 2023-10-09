/* import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js"; */

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjnK2rZrg7pDTqF9w05n2vJ7qqoOhH1x8",
    authDomain: "milkvilla-52215.firebaseapp.com",
    projectId: "milkvilla-52215",
    storageBucket: "milkvilla-52215.appspot.com",
    messagingSenderId: "444031611035",
    appId: "1:444031611035:web:c07e9ad48e624008e7163e",
    measurementId: "G-MH9N5WKZR5"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();