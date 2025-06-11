import React from "react";

const About = () => {
  return (
    <>
      <div className="about py-5">
        <div className="content text-white d-flex vh-100 flex-column align-items-center justify-content-center">
          <h2 className="fs-1 text-uppercase pt-5 fw-bolder">
            about component
          </h2>
          <div className="d-flex gap-3 justify-content-center align-items-center py-3">
            <div className="line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line"></div>
          </div>

          <div className="container">
            <div className="row text-center">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
