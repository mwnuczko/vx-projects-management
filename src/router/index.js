import Vue from 'vue';
import Router from 'vue-router';

import PageNotFound from '../components/PageNotFound';
// modules
import dashboardRoutes from '../modules/dashboard/routes';
import usersRoutes from '../modules/users/routes';
import projectsRoutes from '../modules/projects/routes';

Vue.use(Router);

export default new Router({
  routes: [
    ...dashboardRoutes,
    ...usersRoutes,
    ...projectsRoutes,
    { path: '*', component: PageNotFound },
  ],
});
