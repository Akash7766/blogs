import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer class="footer footer-center p-10 bg-primary text-primary-content">
        <div>
          <h2 className="text-4xl font-bold">Tech Blogs</h2>
          <p class="font-bold">Bloging website since {date}</p>
          <p>Copyright © - All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
