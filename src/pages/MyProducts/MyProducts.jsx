import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../Spinner/Spinner";
import MyProductsUI from "./MyProductsUI";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/dashboard/my-products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {myProducts.map((product) => (
        <MyProductsUI key={product._id} product={product} refetch={refetch} />
      ))}
    </div>
  );
};

export default MyProducts;
