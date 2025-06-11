import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-100">
        <div className="container">
          <div className=" row d-flex justify-content-between text-white">
            <div className="col-md-4 ">
              <div className="left text-center">
                <h3 className="text-uppercase fs-2">LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="center text-center">
                <h3 className="text-uppercase fs-2">AROUND THE WEB</h3>
                <div className="icons d-flex justify-content-center gap-2">
                  <div>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right text-center">
                <h3 className="text-uppercase fs-2">ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="foo">
        <p className="text-center py-4 mb-0 text-white">
          Copyright © Your Website 2021
        </p>
      </div>
    </>
  );
};

export default Footer;
