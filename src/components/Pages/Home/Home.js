import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section className=" px-10 my-12">
        <div className=" border-b-2 py-2 border-orange-400">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            Special Products
          </h1>
        </div>
      </section>

      <section className=" px-10 my-12">
        <div className=" flex justify-between py-2 border-b-2 border-orange-400">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            Our Products
          </h1>
          {/* <div className=" text-4xl flex gap-10 my-3">
            <span>{"<"}</span> <span>{">"}</span>
          </div> */}
        </div>
      </section>

      {/*  */}
      <section className=" px-10 my-12">
        <div className=" flex justify-between py-2 border-b-2 border-orange-400">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            WHAT OUR CUSTOMERS SAY
          </h1>
          {/* <div className=" text-4xl flex gap-10 my-3">
            <span>{"<"}</span> <span>{">"}</span>
          </div> */}
        </div>
        <div>
          <Reviews></Reviews>
        </div>
      </section>

      {/*  */}
      <section className=" px-10 my-12">
        <div className=" ">
          <h1 className=" uppercase text-2xl text-left title1 font-semibold ">
            Business Summary
          </h1>
          {/* <div className=" text-4xl flex gap-10 my-3">
            <span>{"<"}</span> <span>{">"}</span>
          </div> */}
        </div>
      </section>

      {/*  */}
      <section className=" px-10 my-12">
        <div className=" ">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            GET IN TOUCH
          </h1>
          {/* <div className=" text-4xl flex gap-10 my-3">
            <span>{"<"}</span> <span>{">"}</span>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
