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
import UseRef from "./components/UseRef.jsx";
import UseParams from "./components/UseParams.jsx";
import UseSearchParams from "./components/UseSearchParams.jsx";
import EventBubbling from "./components/EventBubbling.jsx";
import EventPropagation from "./components/EventPropagation.jsx";

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
    path: "/event-propagation",
    element: <EventPropagation />,
  },
  {
    path: "/use-params/:id",
    element: <UseParams />,
  },
  {
    path: "/use-search-params",
    element: <UseSearchParams />,
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
    path: "/use-ref",
    element: <UseRef />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/bubble",
    element: <EventBubbling />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
