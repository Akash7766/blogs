import React, { useEffect, useState } from "react";
import ManageSinglePost from "./ManageSinglePost";

const ManageMyPost = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container mx-auto py-14 px-3">
      <div className="flex justify-center mb-5">
        <div className=" indicator mx-auto">
          <span class="indicator-item badge badge-primary">new</span>{" "}
          <h2 className="text-4xl font-bold uppercase text-center">
            Our latest Blogs
          </h2>
        </div>
      </div>
      <div className="py-10 grid grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <ManageSinglePost key={blog._id} blog={blog}></ManageSinglePost>
        ))}
      </div>
    </div>
  );
};

export default ManageMyPost;
