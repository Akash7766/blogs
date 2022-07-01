import { async } from "@firebase/util";
import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import GoogleLogin from "./GoogleLogin";
import Loading from "./Loading";

const Signup = () => {
  const [user, loading, error] = useAuthState(auth);
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  // if user exist then navigate to home
  useEffect(() => {
    if (user || emailUser) {
      toast.success("Accaount create successful");
      navigate("/");
    }
  }, [user || emailUser]);
  // if any error then show it on UI
  useEffect(() => {
    if (emailError) {
      toast.error(emailError.code.split("/")[1]);
    }
  }, [emailError]);
  // if loading then display loading components
  if (loading || emailLoading) {
    return <Loading></Loading>;
  }
  // handle singup function
  const handleSignup = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
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
                  value="Sign up"
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
