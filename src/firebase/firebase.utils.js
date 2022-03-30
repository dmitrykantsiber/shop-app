import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAWH9e4sZvGBKtA7ZBkIV6XhJQ6wMsgqF4",
  authDomain: "shop-db-ef987.firebaseapp.com",
  projectId: "shop-db-ef987",
  storageBucket: "shop-db-ef987.appspot.com",
  messagingSenderId: "4526103821",
  appId: "1:4526103821:web:5421056b6a131f4ffc2444",
  measurementId: "G-LVFWDP838Z",
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
