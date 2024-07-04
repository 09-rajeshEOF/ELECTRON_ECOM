// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsrl7AvkEo3De6t0xkEBRHjTwXihq2dFE",
  authDomain: "electronecom-fdc83.firebaseapp.com",
  projectId: "electronecom-fdc83",
  storageBucket: "electronecom-fdc83.appspot.com",
  messagingSenderId: "759777370689",
  appId: "1:759777370689:web:42daf23a9b7dd088dedcc0",
  measurementId: "G-Z9EP7VPZLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;