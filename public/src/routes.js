import {
  App,
  AboutContainer,
  CategoryContainer,
  HomeContainer,
  ContactContainer,
} from './containers';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomeContainer },
  childRoutes: [
    {
      path: '/home',
      component: HomeContainer,
      childRoutes: [
        {
          path: '/home/:id',
          component: CategoryContainer,
        }
      ]
    },
    { path: '/about', component: AboutContainer },
    { path: '/contact', component: ContactContainer },
  ],
};

export default routes;
