import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC2W4N1TbNM4WYei_zi-d2pukBnjpz8qkE",
  authDomain: "text-file-share.firebaseapp.com",
  projectId: "text-file-share",
  storageBucket: "text-file-share.appspot.com",
  messagingSenderId: "736464368774",
  appId: "1:736464368774:web:5652121490514e39210d07",
};
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app);
export { app, database, storage };
