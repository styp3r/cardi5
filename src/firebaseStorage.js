import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Set the configuration for your app
// TODO: Replace with your app's config object
const secondaryAppConfig = {
  apiKey: "AIzaSyAtBca0XpGtCgHTMjgePTQd-47_6YR0hKw",
  authDomain: "kardi-d5052.firebaseapp.com",
  databaseURL: "https://kardi-d5052-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kardi-d5052",
  storageBucket: "kardi-d5052.appspot.com",
  messagingSenderId: "151636502468",
  appId: "1:151636502468:web:a6be702124b32eec3e2691",
  measurementId: "G-V8LELBMFQZ"
};
const secondaryApp = initializeApp(secondaryAppConfig, "secondary");


// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(secondaryApp);

export default storage;