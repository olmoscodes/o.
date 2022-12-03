// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5sskrT0SvGJB_rmLZe8oltuQ1hfHjN9U",
  authDomain: "olmoscodesportfolio.firebaseapp.com",
  databaseURL: "https://olmoscodesportfolio.firebaseio.com",
  projectId: "olmoscodesportfolio",
  storageBucket: "olmoscodesportfolio.appspot.com",
  messagingSenderId: "313664518227",
  appId: "1:313664518227:web:e7a950c23c0ae0dd7ceea6",
  measurementId: "G-SG8F7D3E31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: true
};
