import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingProducts = ({ bookProducts }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { category_id, name, resale_price } = bookProducts;

  const handleBooking = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const phone = event.target.phone.value;

    const booking = {
      userName: user.displayName,
      userEmail: user.email,
      productName: name,
      reaslePrice: resale_price,
      category_id,
      location,
      phone,
      isBooking: true,
    };

    fetch("https://resale-used-products-server.vercel.app/booking-products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/dashboard/my-orders");
          toast.success("Item Booking Successfulty");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="mt-8">
            <form onSubmit={handleBooking} className="space-y-4">
              <input
                type="text"
                name="userName"
                defaultValue={user.displayName}
                disabled
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="userEmail"
                defaultValue={user.email}
                disabled
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="productName"
                defaultValue={name}
                disabled
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="resalePrice"
                defaultValue={resale_price}
                disabled
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="location"
                required
                placeholder="Enter Meeting Location Here"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="phone"
                required
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full"
              />
              <input
                type="submit"
                value="Submit"
                className="w-full btn btn-primary tracking-wider"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProducts;
