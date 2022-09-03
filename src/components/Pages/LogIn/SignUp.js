import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import profile from "./../../../images/profileimg.png";
import auth from "../../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [imgUrl, setImgUrl] = useState(profile);
  const [imageUrl, setImageUrl] = useState();
  const [fromData, setFromData] = useState();
  const [Name, setName] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [passCFocus, setPassCFocus] = useState(false);

  const [createUserWithEmailAndPassword, CrUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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

  const imageStorageKey = "2380d2dfbb3a1a216d57453cbd4c3837";

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImgUrl(URL.createObjectURL(file));

    const image = file;
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    setFromData(formData);
  };

  const onSubmit = (data) => {
    console.log(data);
    const email = data.userEmail;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
    // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    // fetch(url, {
    //   method: "POST",
    //   body: fromData,
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log("image", result);
    //     setImageUrl(result.data.display_url);
    //
    //   });
  };

  return (
    <div className=" flex flex-col sm:flex-row-reverse justify-center  px-10 sm:px-32 lg:px-10 ">
      <div className="lg:flex-1 lg:flex hidden">
        <img
          src={"https://www.cssscript.com/demo/login-page-template/img/bg.svg"}
          alt=""
          className=" lg:w-full"
        />
      </div>
      <div className="flex-1 mt-16 text-center">
        <div className=" w-full md:w-[500px] lg:w-[350px] mx-auto">
          <div>
            <h2 class=" mb-8 text-3xl font-bold ">Please Register</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className=" text-gray-500 ">
            <div class=" my-6">
              <div class="w-36 mb-8 mx-auto relative">
                <div class="avatar w-36 h-36 mx-auto ">
                  <img src={imgUrl} className="rounded-full" />
                </div>
                <div className="absolute bottom-14 right-8 w-16">
                  <i class="fa-solid fa-camera ml-7 text-gray-400 text-[32px] absolute"></i>
                  <input
                    type="file"
                    onChange={onImageChange}
                    className="absolute scale-150 opacity-0"
                  />
                </div>
              </div>

              <div class="div relative">
                <input
                  type="text"
                  onFocus={() => setName(true)}
                  onBlurCapture={() => setName(false)}
                  placeholder="User Name"
                  {...register("userName", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${
                    errors.userName?.type === "required"
                      ? "border-red-600"
                      : "border-gray-400"
                  }`}
                />
                <div
                  class={`${
                    errors.userName?.type ? "text-red-600" : "border-gray-400"
                  } absolute top-2 left-3 `}
                >
                  <i
                    class={`fas fa-user text-[16px] ${
                      Name && " text-success"
                    } ${
                      errors.userName?.type === "required" && "text-red-600"
                    }`}
                  ></i>
                </div>
              </div>
            </div>

            <div class=" my-6">
              <div class="div relative">
                <input
                  type="email"
                  onFocus={() => setEmailFocus(true)}
                  onBlurCapture={() => setEmailFocus(false)}
                  placeholder="User Email"
                  {...register("userEmail", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${
                    errors.userEmail?.type
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
                    errors.userEmail?.type ? "text-red-600" : "border-gray-400"
                  } absolute top-2 left-3 `}
                >
                  <i
                    class={` fa-sharp fa-solid fa-envelope text-[16px] ${
                      emailFocus && " text-success"
                    }  ${
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
                  placeholder="Type Password"
                  {...register("password", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${
                    errors.password?.type === "required"
                      ? "border-red-600"
                      : "border-gray-400"
                  }`}
                />
                <div
                  class={`${
                    errors.password?.type ? "text-red-600" : "border-gray-400"
                  } absolute top-2 left-3 `}
                >
                  <i
                    class={`fas fa-lock text-[16px] ${
                      passFocus && " text-success"
                    } ${
                      errors.password?.type === "required" && "text-red-600"
                    }`}
                  ></i>
                </div>
              </div>
            </div>

            <div class=" mt-5 mb-5">
              <div class="div relative">
                <input
                  type="password"
                  onFocus={() => setPassCFocus(true)}
                  onBlurCapture={() => setPassCFocus(false)}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", { required: true })}
                  class={`pl-10 py-1 text-gray-500 text-[16px] font-semibold input-bordered   border-b-2 focus:outline-none focus:border-b-success w-full ${
                    errors.confirmPassword?.type === "required"
                      ? "border-red-600"
                      : "border-gray-400"
                  }`}
                />
                <div
                  class={`${
                    errors.confirmPassword?.type
                      ? "text-red-600"
                      : "border-gray-400"
                  } absolute top-2 left-3 `}
                >
                  <i
                    class={`fas fa-lock text-[16px] ${
                      passCFocus && " text-success"
                    } ${
                      errors.confirmPassword?.type === "required" &&
                      "text-red-600"
                    }`}
                  ></i>
                </div>
              </div>
            </div>

            <div class="my-3 text-right font-medium text-gray-400"></div>

            <div>
              <input
                type="submit"
                class="btn btn-success w-full text-white font-bold text-lg rounded-full my-3"
                value="Register"
              />
            </div>
          </form>

          <div className=" my-3 font-semibold">
            <p>
              Already Registered?
              <Link
                to="/login"
                className=" my-3 font-bold mx-1 text-success cursor-pointer"
              >
                Login Now
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

export default SignUp;
