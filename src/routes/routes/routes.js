import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AddProducts from "../../pages/AddProducts/AddProducts";
import AllBuyer from "../../pages/AllBuyer/AllBuyer";
import AllProcducts from "../../pages/AllProcducts/AllProcducts/AllProcducts";
import AllSeller from "../../pages/AllSeller/AllSeller";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HomePage from "../../pages/HomePage/HomePage/HomePage";
import Login from "../../pages/Login/Login";
import MyOrders from "../../pages/MyOrders/MyOrders";
import MyProducts from "../../pages/MyProducts/MyProducts";
import ReportedItems from "../../pages/ReportedItems/ReportedItems";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute";
import SellerRoute from "../SellerRoute";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/all-products/:id",
        element: (
          <PrivateRoutes>
            <AllProcducts />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resale-used-products-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/all-seller",
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-buyer",
        element: (
          <AdminRoute>
            <AllBuyer />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/report",
        element: (
          <AdminRoute>
            <ReportedItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: (
          <PrivateRoutes>
            <MyOrders />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
