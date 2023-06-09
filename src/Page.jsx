import React, { useRef, useState } from "react";

import "./App.css";
import SendText from "./component/SendText";
import SendFile from "./component/SendFile";
import GetText from "./component/GetText";
import GetFile from "./component/GetFile";
const Page = () => {
  const divElement = useRef();
  const [page, setpage] = useState(1);
  const changeClass = (id) => {
    setpage(id);
    document.getElementById("1").classList.remove("active");
    document.getElementById("2").classList.remove("active");
    document.getElementById("3").classList.remove("active");
    document.getElementById("4").classList.remove("active");
    document.getElementById(`${id}`).classList.add("active");
    console.log(divElement);
    // if (id == 1) {
    // } else if (id == 2) {
    // } else if (id == 3) {
    // } else {
    // }
  };
  return (
    <div className="main_conatiner">
      <div className="navbar_container">
        <div className="navbar_left_container">
          <img src="" alt="Logo" />
        </div>
        <div className="navbar_right_container">
          <div
            className="active"
            id="1"
            ref={divElement}
            onClick={() => {
              changeClass(1);
            }}
          >
            SendText
          </div>
          <div
            className=""
            id="2"
            ref={divElement}
            onClick={() => {
              changeClass(2);
            }}
          >
            SendFile
          </div>
          <div
            className=""
            id="3"
            ref={divElement}
            onClick={() => {
              changeClass(3);
            }}
          >
            GetText
          </div>
          <div
            className=""
            id="4"
            ref={divElement}
            onClick={() => {
              changeClass(4);
            }}
          >
            GetFile
          </div>
        </div>
      </div>
      <div className="component_container">
        {page == 1 ? (
          <SendText />
        ) : page == 2 ? (
          <SendFile />
        ) : page == 3 ? (
          <GetText />
        ) : (
          <GetFile />
        )}
        {/* <SendFile /> */}
        {/* <GetText /> */}
        {/* <GetFile /> */}
      </div>
    </div>
  );
};

export default Page;
