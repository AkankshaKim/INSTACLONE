// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVo2V5KfrZ9VQ6fqWYiSAYscK2-CVFxq4",
  authDomain: "instaclone-c772a.firebaseapp.com",
  projectId: "instaclone-c772a",
  storageBucket: "instaclone-c772a.appspot.com",
  messagingSenderId: "987430182997",
  appId: "1:987430182997:web:bf879619f7742d630274dc",
  measurementId: "G-1RD8T57HGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//

