import React from "react";
import myImg from "../assets/images/avataaars.svg";
const StartFramework = () => {
  return (
    <>
      
      <div className="startFrame py-5">
        <div className="content text-white d-flex vh-100 flex-column align-items-center justify-content-center">
          <img src={myImg} alt="" />
          <h2 className="fs-1 text-uppercase pt-5 fw-bolder">
            start Framework
          </h2>
          <div className="d-flex gap-3 justify-content-center align-items-center py-3">
            <div className="line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line"></div>
          </div>

          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
};

export default StartFramework;
