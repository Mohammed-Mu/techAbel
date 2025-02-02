import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDwHBViX2DDzN2Elvo7nAvgGBMR_9lezE",
  authDomain: "techable-3658b.firebaseapp.com",
  projectId: "techable-3658b",
  storageBucket: "techable-3658b.firebasestorage.app",
  messagingSenderId: "933982987552",
  appId: "1:933982987552:web:f60a4b506e97192c28e345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, onAuthStateChanged, signOut };