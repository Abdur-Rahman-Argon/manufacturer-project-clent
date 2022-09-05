import { useEffect } from "react";
import { useState } from "react";

const useMyOrder = (user) => {
  const [myOrders, setMyOrders] = useState();

  useEffect(() => {
    const email = user?.email;

    const url = `http://localhost:5000/orders/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyOrders(data);
      });
  }, [user]);

  return [myOrders];
};

export default useMyOrder;
