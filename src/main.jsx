import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import AdminDashboard from "./layouts/AdminDashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import UseMemo from "./components/UseMemo.jsx";
import UseCallback from "./components/UseCallback.jsx";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/use-memo",
    element: <UseMemo />,
  },
  {
    path: "/use-callback",
    element: <UseCallback />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
