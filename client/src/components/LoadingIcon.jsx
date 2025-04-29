import React from "react";
import Loadingicon from "../assets/LoadingIcon.svg";

const LoadingIcon = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center animate-spin">
      <img src={Loadingicon} height={50} width={50} />
    </div>
  );
};

export default LoadingIcon;
