import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <div className=" ">
          <img
            src="https://cdn.shopify.com/s/files/1/0635/8315/8519/files/main-banner-01_1903x740.jpg?v=1648697653;"
            alt=""
          />
        </div>
        <div className="title1 top-28 left-32 absolute text-white">
          <h3 className=" text-2xl font-semibold">
            BEST DISCOUNT UP TO 25% OFF
          </h3>
          <h1 className="title1 text-6xl font-bold my-10">SUMMER 10% SALE</h1>
          <h2 className=" font-bold text-orange-400 text-4xl">
            FOR ALL POWER TOOLS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
