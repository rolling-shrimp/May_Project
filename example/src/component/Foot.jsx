import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Flogo } from "./homepng/footer-logo.svg";
import { ReactComponent as Icon4 } from "./icon-15.svg";
import { ReactComponent as Icon5 } from "./icon-16.svg";
import { ReactComponent as Icon6 } from "./icon-17.svg";
import { ReactComponent as Icon7 } from "./icon-18.svg";
import "./style3.css";
function Foot() {
  return (
    <>
      <footer className="d-flex flex-column justify-content-center align-items-center">
        <div
          className=" the d-flex flex-row align-items-center custom-font"
          style={{ height: "100%", width: "60%" }}
        >
          <Flogo className="logggg" />
          <div
            className="d-flex flex-column align-items-center justify-content-center tt"
            style={{ height: "100%", marginLeft: "1rem", width: "300px" }}
          >
            <div
              className="d-flex flex-row justify-content-around align-items-center"
              style={{
                width: "100%",
                height: "50px",
                marginTop: "1rem",
                // border: "black 2px solid",
              }}
            >
              {" "}
              <a
                className="act"
                href=""
                style={{
                  height: "fit-content",
                  width: "fit-content",
                  display: "block",
                }}
              >
                <Icon4 style={{ height: "38px", width: "38px" }} />
              </a>
              <a
                className="act"
                href=""
                style={{
                  height: "fit-content",
                  width: "fit-content",
                  display: "block",
                }}
              >
                <Icon5 style={{ height: "38px", width: "38px" }} />
              </a>
              <a
                className="act"
                href=""
                style={{
                  height: "fit-content",
                  width: "fit-content",
                  display: "block",
                }}
              >
                <Icon6 style={{ height: "38px", width: "38px" }} />
              </a>
              <a
                className="act"
                href=""
                style={{
                  height: "fit-content",
                  width: "fit-content",
                  display: "block",
                }}
              >
                <Icon7 style={{ height: "38px", width: "38px" }} />
              </a>
            </div>
            <p
              className="custom-font"
              style={{
                color: "white",
                marginTop: "1rem",
                fontSize: "0.6rem",
              }}
            >
              @ 2023 plantmeet. All Rights Reserved.
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-start justify-content-center ftinf"
            style={{
              height: "fit-content",
              marginLeft: "1rem",
              // border: "2px solid white",
              width: "200px",
            }}
          >
            <h6 className="custom-font">關於植遇</h6>
            <div
              className="d-flex flex-row justify-content-center"
              style={{
                height: "fit-content",
                width: "100%",
                // border: "2px solid white",
              }}
            >
              <div
                className="d-flex flex-column justify-content-center"
                style={{
                  width: "50%",
                  height: "fit-content",
                  // border: "2px solid white",
                }}
              >
                <a className="custom-font" href="">
                  品牌故事
                </a>
                <a className="custom-font" href="">
                  會員權益
                </a>
                <a className="custom-font" href="">
                  隱私政策
                </a>
              </div>
              <div
                className="d-flex flex-column"
                style={{
                  width: "50%",
                  height: "fit-content",
                }}
              >
                <a className="custom-font" href="">
                  運送須知
                </a>
                <a className="custom-font" href="">
                  退換貨辦法
                </a>
                <a className="custom-font" href="">
                  更多FAQ
                </a>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-start justify-content-center ftinf"
            style={{
              height: "fit-content",
              // marginLeft: "1rem",
              width: "200px",
              // border: "2px solid white",
            }}
          >
            <h6 className="custom-font">服務時間</h6>
            <p className="custom-font">週一至週五 13:00-18:30</p>
            <p className="custom-font">週六及週日 10:00-18:30</p>
            <p className="custom-font">週三公休日 - 暫不服務</p>
          </div>
          <div
            className="d-flex flex-column align-items-start justify-content-center ftinf"
            style={{
              height: "fit-content",
              // marginLeft: "1rem",
              // border: "2px solid white",
              width: "250px",
            }}
          >
            <h6 className="custom-font">植遇門市</h6>
            <p className="custom-font">新北市板橋區民族路168號</p>
            <p className="custom-font">台中市南屯區黎明路二段658號</p>
            <p className="custom-font">高雄市仁武區泰山里仁勇路400號</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Foot;
