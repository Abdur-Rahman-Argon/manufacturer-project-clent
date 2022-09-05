import React from "react";

const Order = ({ orders }) => {
  const paid = false;

  const removeOrder = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "delete",
      headers: {
        // "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="  shadow-md rounded-lg border-[1px] border-gray-100 w-full">
      <div className=" grid grid-cols-1 md:grid-cols-3 items-center">
        <div className=" flex flex-col md:flex-row items-center mx-10 gap-8">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0635/8315/8519/products/12_a3e01afa-332d-4266-b20d-3064f8475840_287x.jpg?v=1648530423"
              className=" w-28"
              alt=""
            />
          </div>
          <div>
            <h1 className=" text-xl font-bold"> product Name </h1>
            <h1 className=" text-sm my-1 font-semibold">
              <span className=" font-bold text-base"> Price:</span>{" "}
              <span>${"25"} </span>
            </h1>

            <h1 className=" text-sm my-1 font-semibold">
              <span className=" font-bold text-base"> Quantity:</span>{" "}
              <span>{"25"} </span>
            </h1>
          </div>
        </div>

        {/*  */}
        <div className=" text-center">
          {paid ? (
            <>
              <h1>
                <span className=" font-semibold text-base">
                  Payment Status:
                </span>
                <span className=" mx-2 title2 text-yellow-500 text-lg font-bold">
                  Paid
                </span>
              </h1>
              <h1>
                <span className=" font-bold text-sm">Pay Date:</span>
                <span className=" mx-1 font-medium">{"25may"}</span>
              </h1>
              <h1>
                <span className=" font-semibold text-base">
                  Transaction ID:
                </span>
                <span className=" text-sm mx-1 font-medium">{"25may"}</span>
              </h1>
            </>
          ) : (
            <>
              <h1>
                <span className=" font-semibold text-base">
                  Payment Status:
                </span>
                <span className=" title2 text-yellow-500 text-lg font-bold">
                  UnPaid
                </span>
              </h1>
              <button className="btn btn-success font-semibold">pay now</button>
            </>
          )}
        </div>

        {/*  */}
        <div className=" text-center">
          {
            <button
              disabled={paid}
              onClick={() => removeOrder(orders._id)}
              className="btn btn-error text-white font-semibold"
            >
              cancel
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Order;
