import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJMhN4Frw-Fk-lwSjQP4s-nhH279PRR-k",
  authDomain: "projects-d0470.firebaseapp.com",
  projectId: "projects-d0470",
  storageBucket: "projects-d0470.firebasestorage.app",
  messagingSenderId: "526399875048",
  appId: "1:526399875048:web:bd690b2119ded1e0bd665d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;