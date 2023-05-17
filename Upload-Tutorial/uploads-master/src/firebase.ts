import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyAxdq5BRfwfDqj1LpM75uGNdMGRR-c40zM",

  authDomain: "react-hook-product.firebaseapp.com",

  projectId: "react-hook-product",

  storageBucket: "react-hook-product.appspot.com",

  messagingSenderId: "557022323113",

  appId: "1:557022323113:web:3d0728e17917faa68224b8"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
