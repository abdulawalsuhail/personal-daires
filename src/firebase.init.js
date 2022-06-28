// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDc_F4E-a_uiy8MptRIC8eAnQVGAMqxlA",
  authDomain: "personal-dairy-4fbd6.firebaseapp.com",
  projectId: "personal-dairy-4fbd6",
  storageBucket: "personal-dairy-4fbd6.appspot.com",
  messagingSenderId: "1006330549852",
  appId: "1:1006330549852:web:55eabde087635d869c3899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;