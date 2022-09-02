import React from "react";
import auth from "../../../firebase.init";
import google from "./../../../images/google.png";
import facebook from "./../../../images/facebook.png";
import github from "./../../../images/github.png";
import twitter from "./../../../images/twitter.png";
// import { useSignInWithGoogle } from "firebase/auth";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  //   if (user || gUser) {
  //     console.log(user, gUser);
  //   }

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
