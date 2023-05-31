import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Icon2 } from "./homepng/nav-icon-cart.svg";
import { ReactComponent as Icon3 } from "./homepng/nav-icon-people.svg";
import "./style2.css";

function Head() {
  return (
    <>
      <div
        id="headerdown"
        class="d-flex flex-row justify-content-center align-items-center"
      >
        <img
          id="downpic"
          // class="logo"
          src={require("./icons/logo-s-w.png")}
          alt=""
        />
        <nav
          id="under"
          class="d-flex justify-content-center align-items-center"
        >
          <button>主題企劃</button>
          <button>體驗課程</button>
          <button>植感購物</button>
        </nav>
        <div
          id="greenunder"
          class="green d-flex justify-content-center align-iems-center greenunder"
          style={{ marginLeft: "1rem" }}
        >
          <div
            style={{
              // backgroundColor: "#5bab8e",
              width: "40px",
              height: "40px",
            }}
          >
            <a href="#">
              <Icon2 style={{ width: "40px", height: "40px" }} />
            </a>
          </div>
          <div
            style={{
              // backgroundColor: "#5bab8e",
              width: "40px",
              height: "40px",
              marginLeft: "0.5rem",
            }}
          >
            <a href="#">
              <Icon3 style={{ width: "40px", height: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
