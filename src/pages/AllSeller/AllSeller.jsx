import React from "react";

const AllSeller = () => {
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
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
            <tbody>
              <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                <td className="p-3">
                  <p>Rakib Seller</p>
                </td>
                <td className="p-3">
                  <p>rakib@gmail.com</p>
                </td>

                <td className="p-3">
                  <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                    <span>Delete</span>
                  </span>
                </td>

                <td className="p-3">
                  <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSeller;
