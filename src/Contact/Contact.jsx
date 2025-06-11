import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className=" text-black text-center">
          <h3 className="fs-1 text-uppercase pt-5 fw-bolder">
            conatct section
          </h3>
          <div className="d-flex  gap-3 justify-content-center align-items-center py-3">
            <div className="line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line"></div>
          </div>
        </div>

        <div className="container">
          <form className="w-50 p-2 pb-5 mx-auto mt-5 ">
            <input
              type="text"
              id="userName"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom my-4 py-3 "
            />
            <input
              type="text"
              id="userAge"
              placeholder="userAge"
              name="userAge"
              className="form-control border-0 border-bottom my-4 py-3 "
            />
            <input
              type="email"
              id="userEmail"
              placeholder="userEmail"
              name="userEmail"
              className="form-control border-0 border-bottom my-4 py-3 "
            />
            <input
              type="password"
              id="userPassword"
              placeholder="userPassword"
              name="userPassword"
              className="form-control border-0 border-bottom my-4 py-3 "
            />

            <button className="btn mt-4 text-white bg-primary">
              send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
