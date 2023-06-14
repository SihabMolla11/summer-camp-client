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
import DashBoardHome from "../Dashboard/DashBoardHome";
import ManagesClasses from "../Dashboard/Admin/ManageClasses/ManagesClasses";
import ManagesUsers from "../Dashboard/Admin/ManagesUsers/ManagesUsers";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/MyEnrollClasses/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
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
        path: "",
        element: <DashBoardHome />,
      },
      {
        path: "selected-classes",
        element: <MySelectedClass />,
      },
      {
        path: "enroll-classes",
        element: <MyEnrollClass />,
      },
      {
        path: "paymentHistory",
        element:<PaymentHistory/>
      },
      {
        path: "add-class",
        element: <AddaClass />,
      },
      {
        path: "myclass",
        element: <MyClass />,
      },
      {
        path: "manageclasses",
        element: <ManagesClasses />,
      },
      {
        path: "manageusers",
        element: <ManagesUsers />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_LINK}/selectedClass/${params.id}`),
      },
    ],
  },
]);
