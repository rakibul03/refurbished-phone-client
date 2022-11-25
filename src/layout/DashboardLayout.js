import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center space-x-6">
        <Link to="/dashboard/all-seller">All Seller</Link>
        <Link to="/dashboard/all-buyer">All Buyer</Link>
      </div>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
