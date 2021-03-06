import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  console.log(location);
  const logout = () => {
    toast.success("Logout successful");
    signOut(auth);
  };
  const navLink = (
    <>
      <li>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            Tech Blogs
          </Link>
        </div>
        <div class="hidden lg:flex navbar-end">
          <ul class="menu menu-horizontal p-0">{navLink}</ul>
        </div>
        <div class="dropdown navbar-end lg:hidden">
          <label tabindex="0" class="btn btn-ghost ">
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
        {location.pathname === "/dashboard" && (
          <label for="my-drawer-2" class="btn drawer-button lg:hidden">
            Dashboard Menu
          </label>
        )}
      </div>
    </div>
  );
};

export default Header;
