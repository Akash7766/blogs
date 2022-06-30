import React from "react";

const Header = () => {
  const navLink = (
    <>
      <li>
        <a>Yo</a>
      </li>

      <li>
        <a>Yo</a>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div class="navbar bg-base-100">
        <div class="w-full lg:navbar-start">
          <a class="btn btn-ghost normal-case text-xl">Tech Blogs</a>

          <div class="dropdown ml-auto">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div class="hidden lg:flex ml-auto">
          <ul class="menu menu-horizontal p-0">{navLink}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
