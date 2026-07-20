import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoiPdzArqR2PscxSFAd5GUO06EonxUHkY",
  authDomain: "liem-shop.firebaseapp.com",
  projectId: "liem-shop",
  storageBucket: "liem-shop.firebasestorage.app",
  messagingSenderId: "1094971501135",
  appId: "1:1094971501135:web:5d53f770adca06cd16583a",
  measurementId: "G-J3YNQKWYRE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
