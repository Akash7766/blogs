import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Shared/Login";
import Signup from "./Pages/Shared/Signup";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageMyPost from "./Pages/Dashboard/ManageMyPost";
import RequireAuth from "./Pages/Shared/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/details/:_id"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<ManageMyPost></ManageMyPost>}></Route>
          <Route path="mypost" element={<ManageMyPost></ManageMyPost>}></Route>
        </Route>
      </Routes>
      <div className="container mx-auto">
        <ToastContainer position="top-center" autoClose={1000}></ToastContainer>
      </div>
    </div>
  );
}
export default App;
