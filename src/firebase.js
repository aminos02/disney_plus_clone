// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvg028i0COXRKEitcSZCuq6oMhLN0LI1s",
  authDomain: "disney-7f14b.firebaseapp.com",
  projectId: "disney-7f14b",
  storageBucket: "disney-7f14b.appspot.com",
  messagingSenderId: "28596896044",
  appId: "1:28596896044:web:f85a6c77910df1766d2c89",
  measurementId: "G-58BY3LSFZ9",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)
const auth = getAuth();
const provider = new GoogleAuthProvider();

export{ auth,provider,storage};
export default db;


