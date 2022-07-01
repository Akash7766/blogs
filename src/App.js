import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Shared/Login";
import Signup from "./Pages/Shared/Signup";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";

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
      </Routes>
    </div>
  );
}

export default App;
