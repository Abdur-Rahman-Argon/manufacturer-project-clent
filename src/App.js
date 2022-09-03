import "./App.css";
import auth from "./firebase.init";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Pages/LogIn/Login";
import Navbar from "./components/Pages/Shared/Navbar";
import SignUp from "./components/Pages/LogIn/SignUp";
import Footer from "./components/Pages/Shared/Footer";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className=" px- ">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
