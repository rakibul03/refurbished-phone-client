import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const MyOrdersUI = ({ order }) => {
  const { userName, userEmail, location, phone, reaslePrice, productName } =
    order;

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
        <p>{userName}</p>
        <p>{productName}</p>
        <p>Location: {location}</p>
        <p>Phone: {phone}</p>
        <p>Products Price: {reaslePrice} Taka</p>
      </div>
      <button className="btn btn-secondary mx-10 mb-10">Buy Now</button>
    </div>
  );
};

export default MyOrdersUI;
