// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBM4WGkruXnGa6bu0KUwWqKHQtO8K3iMQ",
  authDomain: "fir-auth-c8686.firebaseapp.com",
  projectId: "fir-auth-c8686",
  storageBucket: "fir-auth-c8686.appspot.com",
  messagingSenderId: "889046327817",
  appId: "1:889046327817:web:87d9a687439dd130ab8ed8"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };