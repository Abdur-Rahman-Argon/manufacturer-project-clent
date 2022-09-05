import "./App.css";
import auth from "./firebase.init";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Pages/LogIn/Login";
import Navbar from "./components/Pages/Shared/Navbar";
import SignUp from "./components/Pages/LogIn/SignUp";
import Footer from "./components/Pages/Shared/Footer";
import Home from "./components/Pages/Home/Home";
import AllTools from "./components/Pages/Tools/AllTools";
import ToolsDetails from "./components/Pages/Tools/ToolsDetails";
import Parches from "./components/Pages/Parches/Parches";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyOrder from "./components/Pages/Dashboard/MyOrder";
import AddReview from "./components/Pages/Dashboard/AddReview";
import Payment from "./components/Pages/Dashboard/Payment";
import NotFound from "./components/Pages/Shared/NotFound";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/Pages/Shared/RequireAuth";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/allTools" element={<AllTools />}></Route>
        <Route path="/toolsDetails/:toolsId" element={<ToolsDetails />}></Route>

        <Route
          path="/parches/:parchesId"
          element={
            <RequireAuth>
              <Parches />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <MyOrder />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addReview"
            element={
              <RequireAuth>
                <AddReview />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="payment/:id"
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          ></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
