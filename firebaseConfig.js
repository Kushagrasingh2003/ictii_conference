// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY9OAPw49Lr3jxjk36w2oT7zQejTHhtks",
  authDomain: "ictii-conference.firebaseapp.com",
  projectId: "ictii-conference",
  storageBucket: "ictii-conference.appspot.com",
  messagingSenderId: "236122727868",
  appId: "1:236122727868:web:011821543a861a685f37b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
