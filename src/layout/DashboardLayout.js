import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../pages/hooks/useAdmin";
import useSeller from "../pages/hooks/useSeller";
import Navbar from "../pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <>
      <Navbar />

      <div className="flex justify-center my-4 space-x-4 text-sm tracking-widest font-bold">
        {isAdmin && (
          <>
            <Link
              className="bg-indigo-300 px-3 py-1 rounded-md"
              to="/dashboard/all-seller"
            >
              All Seller
            </Link>
            <Link
              className="bg-indigo-300 px-3 py-1 rounded-md"
              to="/dashboard/all-buyer"
            >
              All Buyer
            </Link>
          </>
        )}

        {isSeller && (
          <>
            <Link
              className="bg-indigo-300 px-3 py-1 rounded-md"
              to="/dashboard/add-products"
            >
              Add Products
            </Link>
            <Link
              className="bg-indigo-300 px-3 py-1 rounded-md"
              to="/dashboard/my-products"
            >
              My Products
            </Link>
          </>
        )}

        {!(isAdmin || isSeller) && (
          <Link
            className="bg-indigo-300 px-3 py-1 rounded-md"
            to="/dashboard/my-orders"
          >
            My Orders
          </Link>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default DashboardLayout;
