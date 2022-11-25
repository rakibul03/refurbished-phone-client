import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const handleAddProduct = (data, event) => {
    const productDetails = {
      category_id: data.categoryID,
      name: data.productName,
      picture: data.img,
      location: data.location,
      orginal_price: data.productOriginalPrice,
      resale_price: data.productResalePrice,
      used_time: data.yearOfUses,
      buying_years: data.yearOfBuy,
      post_time: new Date().getHours(),
      phone: data.phone,
      condition: data.condition,
    };
    console.log(productDetails);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-96 p-12 bg-neutral rounded-md">
        <h2 className="text-xl text-white text-center uppercase pb-6 tracking-widest font-semibold">
          Add a products
        </h2>

        <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4">
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Products Name"
              {...register("productName", {
                required: "Products Name is required",
              })}
              className="h-7 px-4 rounded-md input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="url"
              placeholder="Enter Products Images URL"
              {...register("img", {
                required: "Products Image is required",
              })}
              className="h-7 px-4 rounded-md input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Products Original Price"
              {...register("productOriginalPrice", {
                required: "Products Price is required",
              })}
              className="h-6 px-4 rounded-md input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Products Resale Price"
              {...register("productResalePrice", {
                required: "Products Price is required",
              })}
              className="h-6 px-4 rounded-md input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              {...register("phone", {
                required: "Phone is required",
              })}
              className="h-6 px-4 rounded-md input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Your Current Location"
              {...register("location", {
                required: "Location is required",
              })}
              className="h-6 px-4 rounded-md input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="How long did you use(In Years)?"
              {...register("yearOfUses", {
                required: "Year of used is required",
              })}
              className="h-6 px-4 rounded-md input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="When did you purchase?"
              {...register("yearOfBuy", {
                required: "Year of used is required",
              })}
              className="h-6 px-4 rounded-md input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white tracking-wider">
                Select Your Products Condition
              </span>
            </label>
            <select
              {...register("condition", { required: true })}
              className="h-6 px-4 rounded-md input-bordered w-full max-w-xs"
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white tracking-wider">
                Select Your Products Brand
              </span>
            </label>
            <select
              {...register("categoryID", { required: true })}
              className="h-6 px-4 rounded-md input-bordered w-full max-w-xs"
            >
              <option value="1">Apple</option>
              <option value="2">Samsung</option>
              <option value="3">Mi</option>
            </select>
          </div>

          <input
            className="btn btn-success w-full tracking-widest"
            value="add products"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
