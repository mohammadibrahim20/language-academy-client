import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import ManageClass from "../Pages/DashboardCompo/Admin/ManageClass";
import ManageUser from "../Pages/DashboardCompo/Admin/ManageUser";
import AddClass from "../Pages/DashboardCompo/Instructor/AddClass";
import ModalForm from "../Pages/DashboardCompo/Instructor/ModalForm";
import MyClass from "../Pages/DashboardCompo/Instructor/MyClass";
import EnrolledClass from "../Pages/DashboardCompo/Student/EnrolledClass";
import MySelectedClass from "../Pages/DashboardCompo/Student/MySelectedClass";
import PaymentHistory from "../Pages/DashboardCompo/Student/PaymentHistory";
import ErrorPage from "../Pages/Error/ErrorPage";
import Classes from "../Pages/Home/Classes/Classes";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/add-class",
        element: <AddClass />,
      },
      {
        path: "/dashboard/my-classes",
        element: <MyClass />,
      },
      {
        path: "/dashboard/update-class/:id",
        element: <ModalForm />,
      },
      {
        path: "/dashboard/users",
        element: <ManageUser />,
      },
      {
        path: "/dashboard/all-class",
        element: <ManageClass />,
      },
      {
        path: "/dashboard/my-book-class",
        element: <MySelectedClass/>
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory/>
      },
      {
        path: "/dashboard/enrolled",
        element: <EnrolledClass/>
      }
    ],
  },
]);
