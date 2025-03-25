// import firebase from "firebase/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC-5rg1G6aSS6vL2TedaBhBxnDzpJ19odw",
  authDomain: "cape-app.firebaseapp.com",
  databaseURL: "https://cape-app.firebaseio.com",
  projectId: "cape-app",
  storageBucket: "cape-app.appspot.com",
  messagingSenderId: "645314091293",
  appId: "1:645314091293:web:c2241a1e233fd341ce69f4",
};

const fire = initializeApp(firebaseConfig);

export default fire;
