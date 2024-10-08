import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Replace with your Firebase configuration
//secure secret keys
//use a .env file instead
const firebaseConfig = {
  apiKey: "AIzaSyDF7HGq6eOaNbkjeYivQ2xVVX5knWG5Xt0",
  authDomain: "learn--platfrom.firebaseapp.com",
  projectId: "learn--platfrom",
  storageBucket: "learn--platfrom.appspot.com",
  messagingSenderId: "592638165736",
  appId: "1:592638165736:web:3362ea5b5c5b706c513f5d",
  measurementId: "G-C8Y78P1W2K",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);
const logOut = () => signOut(auth);

export { auth, signInWithGoogle, logOut };
