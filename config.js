// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXmqPvgx2kw2d-oXvQFZUyg03H5EUVzYI",
  authDomain: "test-2a101.firebaseapp.com",
  projectId: "test-2a101",
  storageBucket: "test-2a101.appspot.com",
  messagingSenderId: "1097015021882",
  appId: "1:1097015021882:web:520e16e514895c811e4003",
  measurementId: "G-H3ZTJY8RMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
