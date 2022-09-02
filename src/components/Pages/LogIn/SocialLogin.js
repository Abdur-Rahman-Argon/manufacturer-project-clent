import React from "react";
import auth from "../../../firebase.init";
// import { useSignInWithGoogle } from "firebase/auth";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  //   if (user || gUser) {
  //     console.log(user, gUser);
  //   }

  return (
    <div className=" text-center">
      <button
        onClick={() => signInWithGoogle()}
        className=" btn btn-success px-10 my-10"
      >
        log in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
