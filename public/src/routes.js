import { App, HomeContainer, SettingsContainer } from './containers';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: SettingsContainer },
  childRoutes: [
    { path: '/home', component: HomeContainer },
  ],
};

export default routes;
