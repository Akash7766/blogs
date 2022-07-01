import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return children;
};

export default RequireAuth;
