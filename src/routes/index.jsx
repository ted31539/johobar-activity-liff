import { useRoutes } from "react-router-dom";
import { lazy } from "react";

import Loadable from "src/components/Loadable";
import MainLayout from "src/layout/MainLayout";

const Activity = Loadable(lazy(() => import("src/pages/Activity")));
const ErrorPage = Loadable(lazy(() => import("src/pages/ErrorPage")));
const CreateActivity = Loadable(lazy(() => import("src/pages/CreateActivity")));
const LandingPage = Loadable(lazy(() => import("src/pages/LandingPage")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <LandingPage />,
    },
    {
      path: "create-activity",
      exact: true,
      element: <CreateActivity />,
    },
    {
      path: "activity/:id",
      exact: true,
      element: <Activity />,
    },
    {
      path: "*",
      exact: true,
      element: <ErrorPage />,
    },
  ],
};

export default function Routes() {
  return useRoutes([MainRoutes]);
}
