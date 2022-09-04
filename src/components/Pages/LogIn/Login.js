import React from "react";
import { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [signInWithEmailAndPassword, LUser, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const onSubmit = (data) => {
    console.log(data);
    const email = data.userEmail;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    navigate("/");
  };

  return (
    <div className=" flex flex-col sm:flex-row justify-center  px-10 lg:px-10 ">
      <div className="lg:flex-1 lg:flex hidden">
        <img
          src="https://www.cssscript.com/demo/login-page-template/img/bg.svg"
          alt=""
          className=" lg:w-11/12"
        />
      </div>
      <div className="flex-1 mt-16 text-center">
        <div className=" w-full md:w-[500px] lg:w-[350px] mx-auto">
          <div>
            <h2 class=" mb-8 text-3xl font-bold ">Please Login</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className=" ">
            <div class=" my-6">
              <div class="div relative">
                <input
                  type="email"
                  onFocus={() => setEmailFocus(true)}
                  onBlurCapture={() => setEmailFocus(false)}
                  placeholder="User Email"
                  {...register("userEmail", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${
                    errors.userEmail?.type === "required"
                      ? "border-red-600"
                      : "border-gray-400"
                  }`}
                />
                {/* <p className=" text-base font-[600] text-red-600">
                  {errors.userEmail?.type === "required" &&
                    "User Email is required"}
                </p> */}
                <div
                  class={`${
                    errors.userEmail?.type ? "text-red-600" : "border-gray-400"
                  } absolute top-2 left-3 `}
                >
                  <i
                    class={` fa-sharp fa-solid fa-envelope text-[16px]   ${
                      emailFocus && " text-success"
                    }   ${
                      errors.userEmail?.type === "required" && "text-red-600"
                    }`}
                  ></i>
                </div>
              </div>
            </div>
            <div class=" mt-5 mb-5">
              <div class="div relative">
                <input
                  type="password"
                  onFocus={() => setPassFocus(true)}
                  onBlurCapture={() => setPassFocus(false)}
                  placeholder="User Password"
                  {...register("password", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${
                    errors.password?.type === "required"
                      ? "border-red-600"
                      : "border-gray-400"
                  }`}
                />
                {/* <p className=" text-base font-[600] text-red-600">
                  {errors.password?.type === "required" &&
                    "password is required"}
                </p> */}
                <div
                  class={`${
                    errors.password?.type ? "text-red-600" : "border-gray-400"
                  } absolute top-2 left-3 `}
                >
                  <i
                    class={`fas fa-lock text-[16px]    c  ${
                      passFocus && " text-success"
                    } `}
                  ></i>
                </div>
              </div>
            </div>

            <div class="my-3 text-right font-medium text-gray-400">
              <a href="#" className=" hover:text-success">
                Forgot Password?
              </a>
            </div>

            <div>
              <input
                type="submit"
                class="btn btn-success w-full text-white font-bold text-lg rounded-full my-3"
                value="Login"
              />
            </div>
          </form>

          <div className=" my-3 font-semibold">
            <p>
              Not Register?
              <Link
                to="/signup"
                className=" my-3 font-bold mx-1 text-success cursor-pointer"
              >
                Register Now
              </Link>
            </p>
          </div>

          <div class="divider my-5 font-semibold text-gray-400">OR</div>

          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
