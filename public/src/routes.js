import {
  App,
  HomeContainer,
  ProfileContainer,
  SearchContainer,
  SettingsContainer,
} from './containers';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomeContainer },
  childRoutes: [
    { path: '/home', component: HomeContainer },
    { path: '/profile', component: ProfileContainer },
    { path: '/search', component: SearchContainer },
    { path: '/settings', component: SettingsContainer },
  ],
};

export default routes;
