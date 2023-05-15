import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../assets/anim/error404.json";

const _404_ErrorPage = () => {
  return (
    <div className="  min-h-[calc(100vh-414px)] flex justify-center items-center">
      
        <Lottie
          className="max-w-[300px]"
          animationData={errorAnimation}
          loop={true}
        />
      
      
    </div>
  );
};

export default _404_ErrorPage;
