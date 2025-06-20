import React from "react";
import { Circles } from "react-loader-spinner";
const Spinner = () => {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Spinner;
