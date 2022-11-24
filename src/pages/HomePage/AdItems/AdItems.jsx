import React from "react";

const AdItems = () => {
  return (
    <div className="mt-12 ">
      <h1 className="text-xl font-semibold tracking-wider">Trending Ads</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/P4QNngY/iphone-13-finish-unselect-gallery-2-202207-FMT-WHH-wid-1280-hei-492-fmt-p-jpg-qlt-80.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">iPhone!</h2>
            <p>Why Apple is the best place to buy iPhone</p>
            <div className="card-actions">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/P4QNngY/iphone-13-finish-unselect-gallery-2-202207-FMT-WHH-wid-1280-hei-492-fmt-p-jpg-qlt-80.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">iPhone!</h2>
            <p>Why Apple is the best place to buy iPhone</p>
            <div className="card-actions">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/P4QNngY/iphone-13-finish-unselect-gallery-2-202207-FMT-WHH-wid-1280-hei-492-fmt-p-jpg-qlt-80.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">iPhone!</h2>
            <p>Why Apple is the best place to buy iPhone</p>
            <div className="card-actions">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdItems;
