import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AddProducts from "../../pages/AddProducts/AddProducts";
import AllBuyer from "../../pages/AllBuyer/AllBuyer";
import AllProcducts from "../../pages/AllProcducts/AllProcducts/AllProcducts";
import AllSeller from "../../pages/AllSeller/AllSeller";
import Blog from "../../pages/Blog/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HomePage from "../../pages/HomePage/HomePage/HomePage";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
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
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-seller",
        element: <AllSeller />,
      },
      {
        path: "/dashboard/all-buyer",
        element: <AllBuyer />,
      },
      {
        path: "/dashboard/add-products",
        element: <AddProducts />,
      },
    ],
  },
]);
