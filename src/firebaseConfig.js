import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3ClbRINE-363TfFuO-D0Sfokw3Te1O1o",
  authDomain: "gestor-proyectos-18bb8.firebaseapp.com",
  projectId: "gestor-proyectos-18bb8",
  storageBucket: "gestor-proyectos-18bb8.appspot.com",
  messagingSenderId: "125194170392",
  appId: "1:125194170392:web:fe4b6454c6e789568bd36d",
  measurementId: "G-6SSM393G13",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
