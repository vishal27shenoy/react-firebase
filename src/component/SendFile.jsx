import React, { useEffect, useRef, useState } from "react";
import "../CSS/sendfile.css";
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
  setDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
const SendFile = () => {
  const storage = getStorage();
  const [url, seturl] = useState("");
  const [code, setcode] = useState("");
  const [ImgUpload, setImgUpload] = useState();
  const inputRef = useRef(null);
  const reference = useRef(null);
  const [Imgbase, setImgbase] = useState("");
  const [upload, setUpload] = useState("");
  const HandleImageSubmit = () => {
    const imageRef = ref(storage, `image/${ImgUpload.name}`);

    try {
      // Upload the file
      const uploadTask = uploadBytesResumable(imageRef, ImgUpload);

      // Get the download URL
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error("Error uploading file:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File URL:", downloadURL);
              seturl(downloadURL);
              // You can use the downloadURL to access the uploaded file
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        }
      );
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    const val = Math.floor(1000 + Math.random() * 9000);
    setcode(val);
    console.log(url, val);
  };
  const handleImgInput = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setImgbase(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setImgbase(e.target.files[0]);
    setImgUpload(e.target.files[0]);
  };
  const HandleImg = () => {
    inputRef.current.click();
  };
  const senddata = () => {
    if (url && code) {
      console.log("hello");
      setDoc(doc(database, "users_data", code.toString()), {
        text: url,
      })
        .then(() => {})
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  useEffect(() => {
    senddata();
  }, [url]);
  return (
    <>
      <div className="sendfile_container">
        <div className="img_container">
          <img src={Imgbase} alt="" />
        </div>
        <input
          type="file"
          className="sendfile_input"
          onChange={(e) => handleImgInput(e)}
          ref={inputRef}
        />
        <button className="add_btn" onClick={() => HandleImg()}>
          +
        </button>
        <div className="generate_code_container">
          <button onClick={() => HandleImageSubmit()} className="sendtext_btn">
            Generate Code
          </button>
          Your Code : {code}
        </div>
      </div>
    </>
  );
};

export default SendFile;
