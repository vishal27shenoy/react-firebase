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
const GetFile = () => {
  const [obj, setObj] = useState();
  const [dataa, setdata] = useState("");
  const [text, settext] = useState("");
  const [load, setLoad] = useState(false);
  const collectionRef = collection(database, "users_data");
  const getData = async (key) => {
    setLoad(true);
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
    <div className="getfile_container">
      <div className="input_and_btn_container">
        <input
          type="text"
          className="gettext_input"
          placeholder="Enter Code here..."
          onChange={(e) => setdata(e.target.value)}
        />
        <button className="submit_btn" onClick={() => getData(dataa)}>
          Go
        </button>
      </div>
      <div className="output_file_container">
        <img src={text} alt="" className="output_img" />
      </div>
      <button className="output_img_download">
        <a href={text}>Download</a>
      </button>
    </div>
  );
};

export default GetFile;
