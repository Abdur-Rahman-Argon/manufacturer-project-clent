import React from "react";

const HomeProduct = () => {
  // name, image, short description, minimum order quantity, available quantity, price (per unit price), a place order
  return (
    <div>
      <div class="card w-72 my-5 bg-base-100 shadow-2xl">
        <div className=" w-full h-64 mx-auto overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0635/8315/8519/products/04-1_4cf49806-143d-468c-8fc7-98c4ab5bc0a6_287x.jpg?v=1648529023"
            alt=""
            className=" w-10/12 mx-auto -mt-5 "
          />
        </div>
        <div className=" -mt-5  px-3">
          <h1 className=" text-lg font-[700]">Lorem ipsum dolor sit</h1>
          <div className=" my-1 flex gap-5">
            <h2>
              {/* <span className=" font-[700] mr-1">Price :</span> */}
              <span className=" text-[18px] font-[700] mr-1">$ 25.00</span>
              <span className=" text-[14px] text-gray-400 font-medium mx-2 line-through">
                $ 35.00
              </span>
            </h2>
            <h2 className=" text-[16px] bg-slate-300 rounded-md px-[5px] text-gray-600">
              <span className=" font-[600] mr-1">Save</span>
              <span className=" font-medium mr-1">15 %</span>
            </h2>
          </div>

          <h3>
            <span className=" font-[700] mr-1">Stock:</span>
            <span className=" font-medium mr-1">200 pc.</span>
          </h3>
          <h3>
            <span className=" font-[700] mr-1">Minimum Order:</span>
            <span className=" font-medium mr-1">50 pc.</span>
          </h3>

          {/* <div className=" my-1">
            <p className="text-[15px] font-[500]">
              <span className="text-[16px] font-bold"> Description: </span>
              Lorem ipsum dolor sit amet consecte adipisicing elit. Odio
              sapiente Chainni voluptatum dolore, sed, illo ratione ipsam
              suscipit, delenit.
            </p>
          </div> */}
          <div className=" flex justify-between text-center">
            <button className=" btn btn-sm  border-0 hover:bg-green-600 m-2  bg-green-700">
              Order Now
            </button>

            <button className=" btn btn-sm  border-0 hover:bg-green-600 m-2  bg-green-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
