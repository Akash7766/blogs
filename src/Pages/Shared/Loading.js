import React from "react";
import loadingCss from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div class={`${loadingCss.ldsfacebook}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
