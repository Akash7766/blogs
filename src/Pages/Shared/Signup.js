import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const Signup = () => {
  const handleSignup = () => {};
  return (
    <div className="bg-base-200">
      <div class=" items-center container mx-auto">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center hidden lg:block ">
            <img
              src="https://i.ibb.co/QYRQydQ/65dca69f78972935caf61580e7c17bd9-removebg-preview.png"
              alt=""
            />
          </div>
          <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 class="text-4xl mb-5 font-bold text-center">Register now!</h1>
              <form onSubmit={handleSignup} className="grid gap-4">
                <div>
                  <label className="lebel-text label">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    class="input input-bordered input-accent w-full bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="lebel-text label">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    class="input input-bordered input-accent w-full bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="lebel-text label">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    class="input input-bordered input-accent w-full bg-transparent"
                    required
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-bordered btn-primary w-full"
                  value="Login"
                />
              </form>
              <p>
                Already have an accaount?
                <Link to="/login" className="text-blue-500">
                  {" "}
                  Login
                </Link>
              </p>

              <div class="divider">OR</div>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
