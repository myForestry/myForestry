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
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    {
      path: '/home',
      indexRoute: { onEnter: (nextState, replace) => replace('/home/1') },
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
