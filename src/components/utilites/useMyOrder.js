import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading";

const useMyOrder = (user) => {
  // const [myOrders, setMyOrders] = useState();
  const [Loading, setLoading] = useState(false);

  const email = user?.email;
  // useEffect(() => {
  //   setLoading(true);

  //   const url = `http://localhost:5000/orders/${email}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMyOrders(data);
  //       setLoading(false);
  //     });
  // }, [user]);

  const {
    data: myOrders,
    isLoading,
    error,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/orders/${email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return [myOrders, isLoading];
};

export default useMyOrder;
