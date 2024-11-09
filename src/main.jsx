import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Component/Main/Main";
import LogIn from "./Component/LogIn/LogIn";
import LogOut from "./Component/LogOut/LogOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/logout",
        element: <LogOut></LogOut>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
