import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYdVaNKueDToUh0XAYXQi7idSgSq33xyU",
  authDomain: "my-money-b58eb.firebaseapp.com",
  projectId: "my-money-b58eb",
  storageBucket: "my-money-b58eb.appspot.com",
  messagingSenderId: "292647681313",
  appId: "1:292647681313:web:77713293a0aa219ab95260",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectStorage = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectStorage, projectAuth, timestamp };
