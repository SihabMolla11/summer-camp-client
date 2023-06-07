import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../shear/Login&Register/Register";
import Login from "../shear/Login&Register/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Register/>
      }
    ]
  },
]);
