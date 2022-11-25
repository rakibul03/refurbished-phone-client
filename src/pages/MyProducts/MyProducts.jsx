import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../Spinner/Spinner";
import MyProductsUI from "./MyProductsUI";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/dashboard/my-products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, [user?.email]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {myProducts.map((product) => (
        <MyProductsUI key={product._id} product={product} />
      ))}
    </div>
  );
};

export default MyProducts;
