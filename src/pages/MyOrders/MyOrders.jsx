import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../Spinner/Spinner";
import MyOrdersUI from "./MyOrdersUI";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["my-orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://resale-used-products-server.vercel.app/booking-products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-12 ">
      {/* <h1 className="text-xl font-semibold tracking-wider">Trending Ads</h1> */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-6">
        {myOrders.map((order) => (
          <MyOrdersUI key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
