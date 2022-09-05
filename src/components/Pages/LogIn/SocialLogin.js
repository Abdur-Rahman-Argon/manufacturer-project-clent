import React from "react";
import auth from "../../../firebase.init";
import google from "./../../../images/google.png";
import facebook from "./../../../images/facebook.png";
import github from "./../../../images/github.png";
import twitter from "./../../../images/twitter.png";
// import { useSignInWithGoogle } from "firebase/auth";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, GLoading, error] = useSignInWithGoogle(auth);
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" text-center flex items-center justify-around my-8">
      <button onClick={() => signInWithGoogle()}>
        <img src={google} alt="" className=" w-8" />{" "}
      </button>

      <button onClick={""} className=" ">
        <img src={facebook} alt="" className=" w-8" />{" "}
      </button>

      <button onClick={""} className=" ">
        <img src={twitter} alt="" className=" w-8" />{" "}
      </button>

      <button onClick={""} className=" ">
        <img src={github} alt="" className=" w-8" />{" "}
      </button>
    </div>
  );
};

export default SocialLogin;

//  className="btn btn-success text-black w-full font-bold text-[16px] rounded-full my-5 flex items-center justify-around"  <span>Login with Google</span>
