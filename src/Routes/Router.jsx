import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../shear/Login&Register/Register";
import Login from "../shear/Login&Register/Login";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instectors/Instructors";

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
      {
        path:"/classes",
        element:<Classes/>
      },
      {
        path: "/instructors",
        element:<Instructors/>
      }
    ],
  },
]);
