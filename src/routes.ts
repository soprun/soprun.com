import * as React from "react";
import Page from "./components/Page/Page";

const routes: Array<Route> = [
  {
    path: '/',
    component: Page,
    routes: []
  },
  {
    path: '/about',
    component: Page,
    routes: []
  },
  {
    path: '/dashboard',
    component: Page,
    routes: []
  }
];

export default routes;

export interface Route {
  path: string | string[],
  component: React.ComponentType<any> | null,
  routes?: Array<Route>
}
