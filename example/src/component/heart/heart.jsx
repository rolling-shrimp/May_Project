import React, { useState, useEffect, useRef } from "react";

function Heart() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const handleClick = () => {
    setShowFirstImage(!showFirstImage);
  };
  return (
    <>
      <button
        style={{
          marginLeft: "10rem",
          backgroundColor: "unset",
          border: "unset",
          width: "fit-content",
          height: "fit-content",
        }}
        className="heart"
        onClick={handleClick}
      >
        {showFirstImage ? (
          <img
            src={require("./sidebaricon4.png")}
            alt="First Image"
            style={{ height: "20px", width: "20px" }}
          />
        ) : (
          <img
            src={require("./heart.png")}
            alt="Second Image"
            style={{ height: "20px", width: "20px" }}
          />
        )}
      </button>
    </>
  );
}

export default Heart;
