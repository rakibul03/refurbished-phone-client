import React from "react";

const HomeBanner = () => {
  return (
    <div
      className="hero min-h-[450px] mt-10"
      style={{ backgroundImage: `url("https://bit.ly/3F0bQVO")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Sell & Buy</h1>
          <p className="mb-5">
            Find here Used Mobile Phones, Second Hand Mobile phone
            manufacturers, suppliers & exporters in Recycling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
