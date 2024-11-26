import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link, RouterProvider } from "react-router-dom";
import "./index.css";
import { root } from "./root";
import { UserContextProvider } from "./context/userContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={root} />
      
    </UserContextProvider>
  </StrictMode>
);
