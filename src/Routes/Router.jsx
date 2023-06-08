import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../shear/Login&Register/Register";
import Login from "../shear/Login&Register/Login";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
