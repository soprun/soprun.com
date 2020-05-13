import * as React from "react";
import Page from "./components/Page/Page";

const routes: Route[] = [
  {
    path: '/',
    component: Page,
  },
  {
    path: '/about',
    component: Page,
  },
  {
    path: '/dashboard',
    component: Page,
  }
];

export default routes;

export interface Route {
  path: string | string[],
  component: React.ComponentType<any> | null,
  routes?: null
}
