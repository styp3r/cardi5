// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getDatabase  } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAtBca0XpGtCgHTMjgePTQd-47_6YR0hKw",
  authDomain: "kardi-d5052.firebaseapp.com",
  databaseURL: "https://kardi-d5052-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "kardi-d5052",
  storageBucket: "kardi-d5052.appspot.com",
  messagingSenderId: "151636502468",
  appId: "1:151636502468:web:a6be702124b32eec3e2691",
  measurementId: "G-V8LELBMFQZ"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase();

export default database;
