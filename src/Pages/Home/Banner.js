import React from "react";
import bannerStyle from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <div className={`${bannerStyle.bgBanner}`}>
        <div className={`${bannerStyle.overlay}`}>
          <div className="container mx-auto text-center">
            <div className="py-52">
              <h3 className="text-2xl mb-5 text-white">Hello! Welcome to</h3>
              <h1 className="text-9xl font-bold text-white">Tech Blogs</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
