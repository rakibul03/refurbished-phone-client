import React from "react";
import AdItems from "../AdItems/AdItems";
import HomeBanner from "../HomeBanner/HomeBanner";
import ProductsCategory from "../ProductsCategory/ProductsCategory";
import UserReviews from "../UserReviews/UserReviews";

const HomePage = () => {
  return (
    <div className="px-6">
      <HomeBanner />
      <AdItems />
      <ProductsCategory />
      <UserReviews />
    </div>
  );
};

export default HomePage;
