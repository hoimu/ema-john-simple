// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtxvcaadlRmZ0bXMCYDtpCpeQCMay4WuI",
  authDomain: "ema-john-simple-b73a5.firebaseapp.com",
  projectId: "ema-john-simple-b73a5",
  storageBucket: "ema-john-simple-b73a5.appspot.com",
  messagingSenderId: "70169265448",
  appId: "1:70169265448:web:6380f6480ba038378efc1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;