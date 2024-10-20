import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader size={20} color="black" />
    </div>
  );
};

export default Loader;
