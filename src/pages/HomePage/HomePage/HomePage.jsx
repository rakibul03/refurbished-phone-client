import React from "react";
import AdItems from "../AdItems/AdItems";
import HomeBanner from "../HomeBanner/HomeBanner";
import ProductsCategory from "../ProductsCategory/ProductsCategory";

const HomePage = () => {
  return (
    <div className="px-6">
      <HomeBanner />
      <AdItems />
      <ProductsCategory />
    </div>
  );
};

export default HomePage;
