import React, { useState } from "react";
import "../CSS/gettext.css";
import { app, database } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
  updateDoc,
  deleteField,
} from "firebase/firestore";
const GetText = () => {
  const collectionRef = collection(database, "users_data");
  const [key, setkey] = useState("");
  const [text, settext] = useState("");
  const HandleSubmit = async () => {
    if (!key) return;
    const documentRef = doc(database, "users_data", key.toString());
    const documentSnapshot = await getDoc(documentRef);
    try {
      const documentSnapshot = await getDoc(documentRef);
      if (documentSnapshot.exists()) {
        const data = documentSnapshot.data();
        console.log("Document data:", data);
        settext(data.text);
      } else {
        console.log("Document does not exist.");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
    try {
      await deleteDoc(documentRef);
      console.log("Document deleted successfully.");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  return (
    <div className="dettext_conatiner">
      <div className="input_and_btn_container">
        <input
          type="text"
          className="gettext_input"
          placeholder="Enter Code here..."
          onChange={(e) => setkey(e.target.value)}
        />
        <button className="submit_btn" onClick={() => HandleSubmit()}>
          Go
        </button>
      </div>
      <div className="output_text_container">{text}</div>
    </div>
  );
};

export default GetText;
