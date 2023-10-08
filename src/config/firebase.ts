// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwioi3WoPCZLOB8MVYhZ536RYBjIDsV2A",
  authDomain: "fir-project-f5e67.firebaseapp.com",
  projectId: "fir-project-f5e67",
  storageBucket: "fir-project-f5e67.appspot.com",
  messagingSenderId: "372238325171",
  appId: "1:372238325171:web:8ceff73065e9a017b767c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();