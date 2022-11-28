import React from "react";
import { toast } from "react-toastify";

const ReportedItemsUI = ({ reportedItem, refetch }) => {
  const { _id, picture, name, seller_email, resale_price } = reportedItem;

  const hanldeDelete = (id) => {
    fetch(
      `https://resale-used-products-server.vercel.app/reported-items/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Reported Product delete successfully");
        }
      });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Seller Email: {seller_email}</p>
          <p>Sale Price: {resale_price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => hanldeDelete(_id)}
              className="btn-outline badge badge-outline"
            >
              Delete Products
            </button>
            <button className="btn-outline badge badge-outline">
              Remove Flag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedItemsUI;
