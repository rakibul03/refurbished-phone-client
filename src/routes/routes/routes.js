import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllProcducts from "../../pages/AllProcducts/AllProcducts/AllProcducts";
import HomePage from "../../pages/HomePage/HomePage/HomePage";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

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
        element: <AllProcducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);
