import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Delivery from "./Delivery";
import GetInTouch from "./GetInTouch";
import OfficeLocation from "./OfficeLocation";
import Reviews from "./Reviews";
import SpecialProduct from "./SpecialProduct";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Delivery></Delivery>
      </section>

      <section className=" px-10 my-5">
        <div className=" flex justify-between items-center border-b-2 border-orange-300">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            Special Products
          </h1>
          <div className="  text-3xl flex gap-5 mr-4 my-1">
            <button className="rounded hover:bg-slate-200 py-2 px-4">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="rounded hover:bg-slate-200 py-2 px-4">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className=" px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
        </div>
      </section>

      <section className=" px-10 my-5">
        <div className=" flex justify-between items-center py- border-b-2 border-orange-300">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            Our Products
          </h1>
          <div className="  text-3xl flex gap-5 mr-4 my-1">
            <button className="rounded hover:bg-slate-200 py-2 px-4">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="rounded hover:bg-slate-200 py-2 px-4">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className=" px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
        </div>
      </section>

      {/*  */}
      <section className=" px-10 my-5">
        <div className=" flex justify-between items-center border-b-2 border-orange-300">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            WHAT OUR CUSTOMERS SAY
          </h1>
          <div className="  text-3xl flex gap-5 mr-4 my-1">
            <button className="rounded hover:bg-slate-200 py-2 px-4">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="rounded hover:bg-slate-200 py-2 px-4">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div>
          <Reviews></Reviews>
        </div>
      </section>

      {/*  */}
      <section className=" px-10 pb-5 my-14">
        <div className=" ">
          <h1 className=" uppercase text-2xl text-left title1 font-semibold ">
            Business Summary
          </h1>
          {/* <div className=" text-4xl flex gap-10 my-3">
            <span>{"<"}</span> <span>{">"}</span>
          </div> */}
        </div>
        <div>
          <BusinessSummary></BusinessSummary>
        </div>
      </section>

      {/*  */}
      <section className=" px-10 my-5">
        <div className=" flex flex-col gap-5 lg:flex-row-reverse ">
          <div className=" flex-1">
            <GetInTouch></GetInTouch>
          </div>
          <div className=" flex-1">
            <OfficeLocation></OfficeLocation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
