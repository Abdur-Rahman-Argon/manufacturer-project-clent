import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "./PaymentCard";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useEffect } from "react";

const Payment = () => {
  const [processing, setProcessing] = useState(true);
  const { paymentId } = useParams();
  // const [myOrder, setMyOrder] = useState();

  const {
    data: myOrder,
    isLoading,
    error,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/getOrder/${paymentId}`).then((res) =>
      res.json()
    )
  );

  const stripePromise = loadStripe(
    "pk_test_51LTEuNIgycd7Qr94jp26PigHhQnli8Y9RLy5X2rZTuOZcjOqzjDJ2pL2GWRt3KgiBlx4lTNqYVLJs9HfrhBDNTBs00hUwly6As"
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10">
      <div></div>
      <div>
        <div></div>
        <div>
          <div className="card w-full md:w-[500px] mx-auto py-10  px-5 border-[1px] border-gray-100 bg-base-200 ">
            <Elements stripe={stripePromise}>
              <PaymentCard myOrder={myOrder}></PaymentCard>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
