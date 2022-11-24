import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllProductsUI from "./AllProductsUI";
import BookingProducts from "./BookingProducts";

const AllProcducts = () => {
  const allProcduct = useLoaderData();
  const [bookProducts, setBookProducts] = useState(null);

  return (
    <div>
      {allProcduct.map((product) => (
        <AllProductsUI
          key={product._id}
          product={product}
          setBookProducts={setBookProducts}
        />
      ))}
      {bookProducts && <BookingProducts bookProducts={bookProducts} />}
    </div>
  );
};

export default AllProcducts;
