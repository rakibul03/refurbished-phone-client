import React from "react";
import { useLoaderData } from "react-router-dom";
import AllProductsUI from "./AllProductsUI";
import BookingProducts from "./BookingProducts";

const AllProcducts = () => {
  const allProcduct = useLoaderData();

  return (
    <div>
      {allProcduct.map((product) => (
        <AllProductsUI key={product._id} product={product} />
      ))}
      <BookingProducts />
    </div>
  );
};

export default AllProcducts;
