import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCategoryUI from "./ProductsCategoryUI";

const ProductsCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://resale-used-products-server.vercel.app/category")
      .then((data) => {
        const categories = data.data;
        setCategory(categories);
      });
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold tracking-wider mb-5">
        Products Category
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {category?.map((products_category) => (
          <ProductsCategoryUI
            key={products_category._id}
            category={products_category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
