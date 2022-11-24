import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllProcducts from "../../pages/AllProcducts/AllProcducts/AllProcducts";
import Blog from "../../pages/Blog/Blog";
import HomePage from "../../pages/HomePage/HomePage/HomePage";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
]);
