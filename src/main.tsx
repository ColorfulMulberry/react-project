import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import EventPage from "./pages/EventPage";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Showcase from "./pages/Showcase";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
  {
    path: "/showcase",
    element: <Showcase />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

localStorage.setItem(
  "currentUser",
  JSON.stringify({
    email: "apple@sixmail.com",
    password: "checkmate",
    loggedIn: false,
  })
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
