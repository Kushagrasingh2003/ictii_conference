// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuAbkkmK11JA44dbH5RKaXOUNQEoOCnUY",
  authDomain: "ictii-conference2024.firebaseapp.com",
  projectId: "ictii-conference2024",
  storageBucket: "ictii-conference2024.appspot.com",
  messagingSenderId: "142907563070",
  appId: "1:142907563070:web:69adb04b0952233e5d856f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
