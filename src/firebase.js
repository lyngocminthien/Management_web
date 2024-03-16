// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDetcW8l96kQJGxnhsAfqy0sr73vVfP29E",
  authDomain: "mobile-4d312.firebaseapp.com",
  databaseURL: "https://mobile-4d312-default-rtdb.firebaseio.com",
  projectId: "mobile-4d312",
  storageBucket: "mobile-4d312.appspot.com",
  messagingSenderId: "9946167144",
  appId: "1:9946167144:web:b8e2523ec3e42f7106c8dd",
  measurementId: "G-6LW93ZQ873",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
