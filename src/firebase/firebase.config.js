
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpUzL6Z7hmOq6hq09zNkLO9DiMVdr_nko",
  authDomain: "just-test-projects.firebaseapp.com",
  projectId: "just-test-projects",
  storageBucket: "just-test-projects.firebasestorage.app",
  messagingSenderId: "545136845852",
  appId: "1:545136845852:web:ef4c81f80db1122a556bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);