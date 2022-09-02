import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-center  px-10 sm:px-32 lg:px-10 ">
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

          <form className=" ">
            <div class=" my-6">
              <div class="div relative">
                <input
                  type="text"
                  placeholder="User Email"
                  class=" pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered border-gray-400 border-b-2 focus:outline-none focus:border-b-success w-full"
                  required
                />
                <div class=" absolute top-2 left-3">
                  <i class="fas fa-user text-[16px]"></i>
                </div>
              </div>
            </div>
            <div class=" mt-5 mb-5">
              <div class="div relative">
                <input
                  type="password"
                  placeholder="User Password"
                  class=" pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered  border-gray-400 border-b-2 focus:outline-none focus:border-b-success w-full"
                  required
                />
                <div class=" absolute top-2 left-3">
                  <i class="fas fa-lock text-[16px]"></i>
                </div>
              </div>
            </div>

            <div class="my-3 text-right font-medium text-gray-400">
              <a href="#">Forgot Password?</a>
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
