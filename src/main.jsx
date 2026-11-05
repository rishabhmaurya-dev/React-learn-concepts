import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
