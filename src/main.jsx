import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HeadProvider } from "react-head";
import routes from "./routes/Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeadProvider>
      <RouterProvider router={routes} />
    </HeadProvider>
  </React.StrictMode>
);
