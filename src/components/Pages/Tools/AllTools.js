import React from "react";
import useTools from "../../utilites/useTools";
import Tools from "./Tools";

const AllTools = () => {
  const [tools] = useTools();
  const tool = [
    {
      titleName: "Profactor 18V Connected-Ready",
      image:
        "https://cdn.shopify.com/s/files/1/0635/8315/8519/products/12_a3e01afa-332d-4266-b20d-3064f8475840_287x.jpg?v=1648530423",
      price: "25",
      quantity: "284",
      stock: "250",
      minimumOrder: "20",
      delivered: "34",
      description:
        "This Bosch 18V PROFACTOR hammer drill/driver is built for tough drilling and driving jobs, especially drilling large holes straight",

      customerReview: {},
    },
    {
      titleName: "Profactor 18V Connected-Ready",
      image:
        "https://cdn.shopify.com/s/files/1/0635/8315/8519/products/12_a3e01afa-332d-4266-b20d-3064f8475840_287x.jpg?v=1648530423",
      price: "25",
      quantity: "284",
      stock: "250",
      minimumOrder: "20",
      delivered: "34",
      description:
        "This Bosch 18V PROFACTOR hammer drill/driver is built for tough drilling and driving jobs, especially drilling large holes straight",

      customerReview: {},
    },
  ];

  return (
    <div>
      <div>
        <h1 className="  text-4xl my-10 font-semibold text-center">
          All tools Here
        </h1>
      </div>
      <div className=" px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {tools?.map((tool) => (
          <Tools tool={tool}></Tools>
        ))}
      </div>
    </div>
  );
};

export default AllTools;
