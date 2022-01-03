import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA02uLU8WUACT4KeFITE08QHP_MaUXItYI",
  authDomain: "money-manager-a5357.firebaseapp.com",
  projectId: "money-manager-a5357",
  storageBucket: "money-manager-a5357.appspot.com",
  messagingSenderId: "161021403677",
  appId: "1:161021403677:web:4fa8fd67d17a44b8265cf4",
};

// init firestore
firebase.initializeApp(firebaseConfig);

// init service
const projectStorage = firebase.firestore();
const projectAuth = firebase.auth();

export { projectStorage, projectAuth };
