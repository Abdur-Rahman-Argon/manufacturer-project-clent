import React from "react";

const GetInTouch = () => {
  return (
    <div className=" border-[1px] border-gray-200 p-5">
      <div>
        <h1 className=" mb-6 uppercase text-2xl text-center title1 font-semibold ">
          Get In Touch
        </h1>
      </div>
      <div>
        <form>
          <div className=" flex font-medium text-[16px]  flex-row justify-between gap-5 ">
            <input
              placeholder="Name Full Name"
              type="text"
              name=""
              id=""
              className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
            />
            <input
              placeholder="Your Mobile Number"
              type="text"
              name=""
              id=""
              className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
            />
          </div>

          <div className=" flex font-medium text-[16px]  flex-row justify-between gap-5 my-3">
            <input
              placeholder="Your Email"
              type="email"
              name=""
              id=""
              className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
            />
            <input
              placeholder="Subject"
              type="text"
              name=""
              id=""
              className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
            />
          </div>

          {/*  */}
          <div className=" flex font-medium text-[16px]  flex-row justify-between gap-5 my-3">
            <textarea
              placeholder="Type Message"
              name=""
              id=""
              cols="30"
              rows="3"
              className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
            ></textarea>
          </div>

          {/*  */}
          <div className=" text-left font-medium">
            <button class="btn btn-sm bg-green-700 hover:bg-green-800 border-0">
              Send Now <i class="fa-solid fa-paper-plane ml-3"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
