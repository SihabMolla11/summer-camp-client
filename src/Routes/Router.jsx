import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../shear/Login&Register/Register";
import Login from "../shear/Login&Register/Login";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instectors/Instructors";
import DashBoard from "../Layout/DashBoard";
import MySelectedClass from "../Dashboard/MyCelectedClass/MySelectedClass";
import MyEnrollClass from "../Dashboard/MyEnrollClasses/MyEnrollClass";
import AddaClass from "../Dashboard/Instructor/AddAClass/AddaClass";
import MyClass from "../Dashboard/Instructor/MyClass/MyClass";

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
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "selected-classes",
        element: <MySelectedClass />,
      },
      {
        path: "enroll-classes",
        element: <MyEnrollClass />,
      },
      {
        path:"add-class",
        element:<AddaClass/>
      },
      {
        path:"myclass",
        element:<MyClass/>
      }
    ],
  },
]);
