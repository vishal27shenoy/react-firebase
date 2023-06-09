import React, { useEffect, useState } from "react";
import "../CSS/sendtext.css";
// import {
//   getStorage,
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   uploadBytesResumable,
// } from "firebase/storage";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { app, database } from "../firebaseConfig";
const SendText = () => {
  const collectionRef = collection(database, "users_data");
  const [Text, setText] = useState("");
  const [code, setcode] = useState("");
  const HandleTextSubmit = () => {
    console.log(Text, database);
    const val = Math.floor(1000 + Math.random() * 9000);
    setcode(val);
    // console.log(Text, val);
    // setText(Text);
    // if (Text && code) {
    //   setDoc(doc(database, "users_data", val.toString()), {
    //     text: Text,
    //   })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    // setText("");
  };
  const adddata = () => {
    console.log("hello");
    setDoc(doc(database, "users_data", code.toString()), {
      text: Text,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "hello");
      });
  };
  useEffect(() => {
    if (Text && code) adddata();
  }, [code]);
  return (
    <div className="sendtext_container">
      <textarea
        onChange={(e) => setText(e.target.value)}
        className="textarea_container"
        placeholder="Your text here..."
      ></textarea>
      <div>
        <button onClick={() => HandleTextSubmit()} className="sendtext_btn">
          Generate Code
        </button>
        Your Code : {code}
      </div>
    </div>
  );
};

export default SendText;
