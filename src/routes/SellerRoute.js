import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

import useSeller from "../pages/hooks/useSeller";
import Spinner from "../pages/Spinner/Spinner";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isLoading) {
    return <Spinner />;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
