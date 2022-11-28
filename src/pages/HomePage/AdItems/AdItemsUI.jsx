import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const AdItemsUI = ({ adProduct }) => {
  const { name, location, phone, resale_price, orginal_price, seller_email } =
    adProduct;
  const [seller, setSeller] = useState(null);

  // Get seller details from db
  useEffect(() => {
    fetch(
      `https://resale-used-products-server.vercel.app/users/verify?email=${seller_email}`
    )
      .then((res) => res.json())
      .then((data) => setSeller(data));
  }, [seller_email]);

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://i.ibb.co/P4QNngY/iphone-13-finish-unselect-gallery-2-202207-FMT-WHH-wid-1280-hei-492-fmt-p-jpg-qlt-80.jpg"
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-start ml-2">
        <p>{name}</p>
        <p>Location: {location}</p>
        <p>Phone: {phone}</p>
        <p>Resale Price: {resale_price} Taka</p>
        <p>Original Price: {orginal_price} Taka</p>
        <p>
          Sell by: {seller?.name}{" "}
          {seller?.isVerifyed ? (
            <FontAwesomeIcon
              className="text-indigo-700 cursor-pointer"
              title="Verified"
              icon={faCircleCheck}
            />
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer"
              title="Not Verified"
              icon={faCircleCheck}
            />
          )}
        </p>
      </div>
      <button className="btn btn-secondary mx-10 mb-10">Buy Now</button>
    </div>
  );
};

export default AdItemsUI;
