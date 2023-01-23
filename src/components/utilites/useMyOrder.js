import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading";

const useMyOrder = (user) => {
  const [myOrders, setMyOrders] = useState();

  useEffect(() => {
    const email = user?.email;
    const url = `https://adm-industry-ltd.onrender.com/orders/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [user]);

  return [myOrders];
};

export default useMyOrder;
