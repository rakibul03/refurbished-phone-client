import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../Spinner/Spinner";
import ReportedItemsUI from "./ReportedItemsUI";

const ReportedItems = () => {
  const {
    data: reportedItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch(
        `https://resale-used-products-server.vercel.app/reported-items`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-6">
      {reportedItems?.map((reportedItem) => (
        <ReportedItemsUI
          key={reportedItem._id}
          reportedItem={reportedItem}
          refetch={refetch}
        />
      ))}
    </div>
  );
};

export default ReportedItems;
