import React from "react";

const AllProductsUI = ({ product, setBookProducts }) => {
  const {
    picture,
    name,
    location,
    resale_price,
    orginal_price,
    used_time,
    post_time,
  } = product;
  return (
    <div className="mt-10 rounded-lg mx-6 bg-white">
      <div className="card lg:card-side shadow-xl ">
        <figure>
          <img src={picture} alt="Album" className="h-48 w-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title tracking-wider">{name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-bold tracking-wide">
                Location:{" "}
                <span className="text-sm text-gray-500">{location}</span>{" "}
              </p>
              <p className="text-lg font-bold tracking-wide">
                Original Price:{" "}
                <span className="text-sm text-gray-500">{orginal_price}</span>{" "}
              </p>
              <p className="text-lg font-bold tracking-wide">
                Resale Price:{" "}
                <span className="text-sm text-gray-500">{resale_price}</span>{" "}
              </p>
            </div>

            <div>
              <p className="font-bold tracking-wide">
                <span className="text-sm text-gray-500">
                  Posted {post_time}
                </span>
              </p>

              <p className="font-bold tracking-wide">
                <span className="text-sm text-gray-500">
                  Total Used {used_time}
                </span>
              </p>
              <p className="font-bold tracking-wide">
                <span className="text-sm text-gray-500">
                  Sell By Md Rakibul Hasan
                </span>
              </p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <label
              onClick={() => setBookProducts(product)}
              htmlFor="booking-modal"
              className="btn-sm rounded-md btn-primary pt-1 cursor-pointer"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsUI;
