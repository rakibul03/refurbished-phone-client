import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { handleReport } from "../../../utilis/handleReport";

const AdItemsUI = ({ adProduct, setBookProducts }) => {
  const {
    name,
    location,
    phone,
    resale_price,
    orginal_price,
    seller_email,
    picture,
  } = adProduct;
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
        <img src={picture} alt="" className="rounded-xl" />
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

      <div className="flex mb-10 mx-auto gap-4">
        <div className="card-actions">
          <label
            onClick={() => setBookProducts(adProduct)}
            htmlFor="booking-modal"
            className="btn rounded-md btn-secondary cursor-pointer"
          >
            Book Now
          </label>
        </div>
        <div>
          <p
            onClick={() => handleReport(adProduct._id)}
            className="btn btn-secondary"
          >
            Report To Admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdItemsUI;
