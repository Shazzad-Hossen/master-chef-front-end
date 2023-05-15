import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/anim/loading.json";

const LoadingSpinner = () => {
  return (
    <div className="w-100vw min-h-[calc(100vh-414px)] flex justify-center items-center">
      <Lottie 
        className="max-w-[300px]"
        animationData={loadingAnimation}
        loop={true}
      />
    </div>
  );

  
};

export default LoadingSpinner;
