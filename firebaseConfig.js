import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrh9kFmDdBqLtgyXPswljkX2UuHyAD8dw",
  authDomain: "shareshabbat-2.firebaseapp.com",
  projectId: "shareshabbat-2",
  storageBucket: "shareshabbat-2.appspot.com",
  messagingSenderId: "664034383139",
  appId: "1:664034383139:web:7222a7a653714f4168e896",
  measurementId: "G-07CHJQJKBV",
};

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    },
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
