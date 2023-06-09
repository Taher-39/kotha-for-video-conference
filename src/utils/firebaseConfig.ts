import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA16606zsQ1cBnclLoIhT6h1c7Lsv55eyg",
  authDomain: "kotha-1.firebaseapp.com",
  projectId: "kotha-1",
  storageBucket: "kotha-1.appspot.com",
  messagingSenderId: "259848767718",
  appId: "1:259848767718:web:421cf37db89003f2d2d327",
  measurementId: "G-VWPBR1NSLL",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
