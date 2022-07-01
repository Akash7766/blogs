import React from "react";

const SingleBlog = ({ blog }) => {
  const { title, image } = blog;
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
          <h1 class="mb-5 text-3xl font-bold">{title}</h1>
          <button class="btn btn-primary mt-3">Read this blog</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
