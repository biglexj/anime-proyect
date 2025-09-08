import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Explorar = lazy(() => import("./pages/Explorar"));
const Top = lazy(() => import("./pages/Top"));
const Recientes = lazy(() => import("./pages/Recientes"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    handle: { nav: { label: "Inicio", order: 0 } },
  },
  {
    path: "/explorar",
    element: <Explorar />,
    handle: { nav: { label: "Explorar", order: 1 } },
  },
  {
    path: "/top",
    element: <Top />,
    handle: { nav: { label: "Top", order: 2 } },
  },
  {
    path: "/recientes",
    element: <Recientes />,
    handle: { nav: { label: "Recientes", order: 3 } },
  },
];
