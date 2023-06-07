import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
]);
