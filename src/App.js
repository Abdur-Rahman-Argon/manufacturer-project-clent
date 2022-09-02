import "./App.css";
import auth from "./firebase.init";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Pages/LogIn/Login";
import Navbar from "./components/Pages/Shared/Navbar";
import SignUp from "./components/Pages/LogIn/SignUp";

function App() {
  return (
    <div className=" px- ">
      <Navbar></Navbar>

      <Routes>
        {/* <Route path="/" element={}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
