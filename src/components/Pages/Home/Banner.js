import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <div className=" w-full overflow-hidden ">
          <img
            src="https://cdn.shopify.com/s/files/1/0635/8315/8519/files/main-banner-01_1903x740.jpg?v=1648697653;"
            className=" sm:w-full"
            alt=""
          />
        </div>
        <div className="title1 top-28 left-32 absolute text-white">
          <h3 className=" text-2xl font-semibold">
            BEST DISCOUNT UP TO 25% OFF
          </h3>
          <h1 className="title1 text-6xl font-bold my-7">SUMMER 10% SALE</h1>
          <h2 className=" font-bold text-orange-400 text-3xl">
            FOR ALL POWER TOOLS
          </h2>

          <button className="btn px-8 my-5 text-black bg-white hover:bg-orange-500">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
