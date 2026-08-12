import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_ktbkHUHZcO8Q21BDCBxcB_Hjwk27zWQ",
  authDomain: "tikiti-roiau.firebaseapp.com",
  projectId: "tikiti-roiau",
  storageBucket: "tikiti-roiau.firebasestorage.app",
  messagingSenderId: "297279976355",
  appId: "1:297279976355:web:1fe01b6b2636ee43dee016"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);