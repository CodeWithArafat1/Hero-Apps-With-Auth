import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import SetLoading from "../components/SetLoading";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRouter from "../privetRouters/PrivetRouter";
import ProfileSettings from "../pages/ProfileSettings";
const Home = lazy(() => import("../pages/Home"));
const Root = lazy(() => import("../layouts/Root"));
const Apps = lazy(() => import("../pages/Apps"));
const Installation = lazy(() => import("../pages/Installation"));
const AppDetails = lazy(() => import("../pages/AppDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-apps",
        Component: Apps,
      },
      {
        path: "/installation",
        element: (
          <PrivetRouter>
            <Installation />
          </PrivetRouter>
        ),
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivetRouter>
            <AppDetails />
          </PrivetRouter>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/profile",
        Component: ProfileSettings,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
