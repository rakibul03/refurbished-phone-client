import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../Spinner/Spinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["my-orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/booking-products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(myOrders);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="phone"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Phone</h2>
          <p>
            Price: <span>1000 Taka</span>
          </p>
          <div className="card-actions">
            <button className="btn btn-sm btn-primary">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
