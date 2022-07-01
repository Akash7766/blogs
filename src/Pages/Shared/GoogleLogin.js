import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn accent w-full"
      >
        Login With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
