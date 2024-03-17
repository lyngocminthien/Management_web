// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEOutYZSFJmK3texqW4H4ZD3tv32PZUhA",
  authDomain: "attendance-d3d9b.firebaseapp.com",
  databaseURL: "https://attendance-d3d9b-default-rtdb.firebaseio.com",
  projectId: "attendance-d3d9b",
  storageBucket: "attendance-d3d9b.appspot.com",
  messagingSenderId: "162433524994",
  appId: "1:162433524994:web:ce5ac7ddb21d938fa5ce1b",
  measurementId: "G-496234RSKE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
export const storage = getStorage(app);
