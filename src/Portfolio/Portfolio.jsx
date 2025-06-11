import React from "react";
import myImg1 from "../assets/images/poert1.png";
import img2 from "../assets/images/port2.png";
import img3 from "../assets/images/port3.png";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className=" text-black text-center">
          <h3 className="fs-1 text-uppercase pt-5 fw-bolder">
            portfolio component
          </h3>
          <div className="d-flex  gap-3 justify-content-center align-items-center py-3">
            <div className="line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line"></div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-4">
              <div className="contentPic rounded-3  position-relative">
                <img src={myImg1} className="w-100 rounded-3" alt="one" />
                <div className="layer position-absolute rounded-3 start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contentPic rounded-3  position-relative">
                <img src={img2} className="w-100 rounded-3" alt="two" />
                <div className="layer position-absolute rounded-3 start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contentPic rounded-3  position-relative">
                <img src={img3} className="w-100 rounded-3" alt="three" />
                <div className="layer position-absolute rounded-3 start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contentPic rounded-3  position-relative">
                <img src={myImg1} className="w-100 rounded-3" alt="one" />
                <div className="layer position-absolute rounded-3 start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contentPic rounded-3  position-relative">
                <img src={img2} className="w-100 rounded-3" alt="two" />
                <div className="layer position-absolute rounded-3 start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contentPic rounded-3  position-relative">
                <img src={img3} className="w-100 rounded-3" alt="three" />
                <div className="layer position-absolute rounded-3 start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
