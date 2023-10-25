import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { loginRoutes } from "./modules/login/routes";
import type { Router as RemixRouter } from "@remix-run/router";


const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela principal</div>,
    errorElement: <div>Página de erro"</div>
  }
]

const router: RemixRouter = createBrowserRouter([...mainRoutes,...loginRoutes,]) 


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
