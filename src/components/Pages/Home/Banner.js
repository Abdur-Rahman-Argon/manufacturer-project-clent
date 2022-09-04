import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <div className=" w-full overflow-hidden ">
          <img
            src="https://cdn.shopify.com/s/files/1/0635/8315/8519/files/main-banner-01_1903x740.jpg?v=1648697653;"
            className=" w-full"
            alt=""
          />
        </div>

        {/* <div className="title1 p-32 top-0 left-0 absolute bg-gradient-to-r from-[#0a0e0d]  text-white"></div> */}

        <div className="title1 top-0 left-0 pt-4 pl-4 md:top-14 md:left-12 lg:top-28 lg:left-32 absolute text-white bg-gradient-to-r from-[#0a0e0d] sm:from-[#] ">
          <h3 className=" md:text-lg lg:text-2xl font-semibold">
            BEST DISCOUNT UP TO 25% OFF
          </h3>
          <h1 className="title1 sm:text-5xl lg:text-6xl font-bold sm:my-4 lg:my-7">
            SUMMER 10% SALE
          </h1>
          <h2 className=" font-bold text-orange-400 text-lg lg:text-3xl">
            FOR ALL POWER TOOLS
          </h2>

          <button className="btn px-3 sm:px-8 my-4 sm:my-5 btn-xs lg:btn-lg text-white bg-orange-400 hover:bg-orange-500 font-thin sm:font-medium ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
