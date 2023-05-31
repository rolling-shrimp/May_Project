// import React, { Component, useRef } from "react";

// import React, { useState } from "react";
import React, { useRef } from "react";

import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

import "./teststyle.css";

// animate list, dont forget to add unique key to each item, don't use array index!!!

// import { Button, Modal } from 'bootstrap';
function Index2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const styles = {
    styleUL: {
      width: "100%",
      height: "200px",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      whiteSpace: "nowrap",
      transition: "all 5s",
      overflow: "hidden",
    },
    styleLi: {
      width: "200px",
      height: "100px",
      backgroundColor: "blue",
      border: "gray 2px solid",
      listStyleType: "none",
      position: "relative",
      overflow: "hidden",
    },
  };

  const myElementRef = useRef(null);

  const handleClick = () => {
    // Access the element using the ref
    console.log(myElementRef.current);
  };

  // ul.style.marginLeft = move;

  // google 找到的滑鼠滾輪事件
  // function mouse_wheel(e) {
  //   e = e || window.event;
  //   e.preventDefault();
  //   if (e.wheelDelta <= 0 || e.detail > 0) {
  //     if (count > li.length) {
  //       return;
  //     }
  //     move = move - 260;
  //     ul.style.marginLeft = move + "px";
  //     count++;
  //   } else {
  //     count--;
  //     if (count < 0) {
  //       count = 0;
  //     }
  //     if (parseInt(ul.style.marginLeft) === 0) {
  //       return;
  //     }
  //     move = move + 260;
  //     ul.style.marginLeft = move + "px";
  //   }
  // }

  // hook event listener on window object
  // if ("onmousewheel" in window) {
  //   window.onmousewheel = mouse_wheel;
  // } else if ("onmousewheel" in document) {
  //   document.onmousewheel = mouse_wheel;
  // } else if ("addEventListener" in window) {
  //   window.addEventListener("mousewheel", mouse_wheel, false);
  //   window.addEventListener("DOMMouseScroll", mouse_wheel, false);
  // }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal className="mymodal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div
        // className="container"
        style={{ width: "100%", height: "200px", backgroundColor: "aqua" }}
      ></div> */}
      <br />
      {/* <div
        style={{ width: "100%", height: "100px", backgroundColor: "purple" }}
      >
        <ul
          className="ull"
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <li style={styles.styleLi}></li>
          <li style={styles.styleLi}></li>
          <li style={styles.styleLi}></li>
          <li style={styles.styleLi}></li>
          <li style={styles.styleLi}></li>
        </ul>
      </div> */}
      {/* <div style={{ height: "1000px" }}></div> */}
      <div ref={myElementRef}>Hello, world!</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default Index2;
