import React from "react";
import { Link } from "react-router-dom";

const ProductsCategoryUI = ({ category }) => {
  const { category_id, category_name, logo } = category;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo} alt="Shoes" className="rounded-xl h-28 w-28" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            <Link
              to={`/all-products/${category_id}`}
              className="btn btn-secondary"
            >
              {category_name}
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategoryUI;
