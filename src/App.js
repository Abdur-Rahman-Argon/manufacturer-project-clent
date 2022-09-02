import "./App.css";
import Login from "./components/Pages/LogIn/Login";
import Navbar from "./components/Pages/Shared/Navbar";
import auth from "./firebase.init";

function App() {
  return (
    <div className=" px- ">
      <Navbar></Navbar>
      <Login></Login>
    </div>
  );
}

export default App;
