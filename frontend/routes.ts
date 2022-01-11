import { Flow } from '@vaadin/flow-frontend';
import { Route } from '@vaadin/router';
import './views/fusion/fusion-view';
import './views/main-layout';

const { serverSideRoutes } = new Flow({
  imports: () => import('../target/frontend/generated-flow-imports'),
});

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'fusion-view',
    icon: '',
    title: '',
  },
  {
    path: 'fusion',
    component: 'fusion-view',
    icon: 'la la-globe',
    title: 'Fusion',
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [
      ...views,
      // for server-side, the next magic line sends all unmatched routes:
      ...serverSideRoutes, // IMPORTANT: this must be the last entry in the array
    ],
  },
];
