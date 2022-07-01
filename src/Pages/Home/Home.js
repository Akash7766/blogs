import React from "react";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
