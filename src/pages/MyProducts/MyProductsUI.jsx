import React, { useState } from "react";

const MyProductsUI = ({ product }) => {
  const { name, orginal_price, resale_price, post_time, isAvailabe } = product;
  const [productsStatus, setProductsStatus] = useState(isAvailabe);

  return (
    <div className="mt-10 rounded-lg mx-6 bg-white">
      <div className="card lg:card-side shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/5jjCd2V/Apple-i-Phone-14.jpg"
            alt="Album"
            className="h-36 w-36 mt-8 sm:mt-0 sm:ml-4 shadow-lg rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title tracking-wider">{name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-bold tracking-wide">
                Original Price:{" "}
                <span className="text-xs text-gray-500">
                  {orginal_price} TAKA
                </span>{" "}
              </p>
              <p className="font-bold tracking-wide">
                Resale Price:{" "}
                <span className="text-xs text-gray-500">
                  {resale_price} TAKA
                </span>{" "}
              </p>
            </div>

            <div>
              <p className="font-bold tracking-wide">
                <span className="text-sm text-gray-500">
                  Posted: {post_time}
                </span>
              </p>

              <p className="flex items-center space-x-2">
                <input
                  onChange={() => setProductsStatus(!productsStatus)}
                  type="checkbox"
                  className="toggle toggle-xs text-sm text-gray-500  px-3"
                  checked={productsStatus}
                />
                {productsStatus ? (
                  <span className=" tracking-wide font-bold text-sm text-gray-500">
                    Available
                  </span>
                ) : (
                  <span className="tracking-wide font-bold text-sm text-gray-500">
                    Sold
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="card-actions justify-start">
              <label
                htmlFor="booking-modal"
                className="px-2 py-1 font-semibold text-[12px] rounded-md bg-violet-400 text-gray-900 cursor-pointer"
              >
                Delete Products
              </label>
            </div>
            {productsStatus && (
              <div className="card-actions justify-start">
                <label
                  htmlFor="booking-modal"
                  className="px-2 py-1 font-semibold text-[12px] rounded-md bg-violet-400 text-gray-900 cursor-pointer"
                >
                  Advertise
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductsUI;
