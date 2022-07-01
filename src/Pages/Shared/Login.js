import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import GoogleLogin from "./GoogleLogin";
import Loading from "./Loading";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithEmailAndPassword, EmailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  // if user exist then navigate to home
  useEffect(() => {
    if (user || EmailUser) {
      toast.success("Login Successful");
      navigate("/");
    }
  }, [user || EmailUser]);
  // if any error then show it on UI
  useEffect(() => {
    if (error || emailError) {
      toast.error(emailError?.code.split("/")[1]);
    }
  }, [error || emailError]);
  // if loading then display loading components
  if (loading || emailLoading) {
    return <Loading></Loading>;
  }
  // handle login function
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
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
              <h1 class="text-4xl mb-5 font-bold text-center">Login now!</h1>
              <form onSubmit={handleLogin} className="grid gap-4">
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
                New to Tech Blogs?
                <Link to="/signup" className="text-blue-500">
                  {" "}
                  Signup
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

export default Login;
