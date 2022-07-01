import React from "react";
import { Link } from "react-router-dom";

const ManageSinglePost = ({ blog }) => {
  const { _id, title, image } = blog;
  return (
    <div
      class="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md py-10">
          <h1 class="mb-5 text-xl sm:text-3xl font-bold">{title}</h1>
          <div>
            <Link to={`/details/${_id}`} class="p-2 m-2 text-2xl text-warning">
              <i class="fa-solid fa-eye"></i>{" "}
            </Link>
            <Link to={`/details/${_id}`} class="p-2 m-2 text-2xl text-warning">
              <i class="fa-solid fa-trash"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSinglePost;
