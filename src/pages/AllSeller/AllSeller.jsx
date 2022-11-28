import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const AllSeller = () => {
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-used-products-server.vercel.app/users/seller"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`https://resale-used-products-server.vercel.app/users/seller/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Seller Deleted Successfully");
        }
      });
  };

  const handleVerify = (id) => {
    fetch(`https://resale-used-products-server.vercel.app/users/seller/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Seller verifed successfully");
        }
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="container p-2 mr-2 mx-auto sm:p-4 text-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Delete</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            {sellers.map((seller) => (
              <tbody key={seller._id}>
                <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                  <td className="p-3">
                    <p>{seller.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{seller.email}</p>
                  </td>

                  <td className="p-3">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                      <span
                        className="cursor-pointer"
                        onClick={() => handleDelete(seller._id)}
                      >
                        Delete
                      </span>
                    </span>
                  </td>

                  <td className="p-3">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                      <button
                        className="cursor-pointer"
                        disabled={seller?.isVerifyed}
                        onClick={() => handleVerify(seller._id)}
                      >
                        {seller?.isVerifyed ? "Verified" : "Pending"}
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSeller;
