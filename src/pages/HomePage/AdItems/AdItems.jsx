import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../Spinner/Spinner";
import AdItemsUI from "./AdItemsUI";

const AdItems = () => {
  const { data: adProducts = [], isLoading } = useQuery({
    queryKey: ["adProducts"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-used-products-server.vercel.app/ad"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-12 ">
      <h1 className="text-xl font-semibold tracking-wider">Trending Ads</h1>
      {adProducts?.length !== 0 ? (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adProducts.map((adProduct) => (
            <AdItemsUI key={adProduct._id} adProduct={adProduct} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-center my-10 text-4xl tracking-widest font-semibold text-gray-500 uppercase">
            No Add Campaing Running Right Now
          </p>
        </div>
      )}
    </div>
  );
};

export default AdItems;
