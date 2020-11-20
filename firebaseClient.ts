import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAG4Y3hc4y3V0FohABJVBqMuXsJt8q_M4",
  authDomain: "hirfa-2cfd6.firebaseapp.com",
  databaseURL: "https://hirfa-2cfd6.firebaseio.com",
  projectId: "hirfa-2cfd6",
  storageBucket: "hirfa-2cfd6.appspot.com",
  messagingSenderId: "115721924011",
  appId: "1:115721924011:web:5502c6026fbfb9275d76ee",
  measurementId: "G-R2FQDF1CYE",
};
// Initialize Firebase

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
