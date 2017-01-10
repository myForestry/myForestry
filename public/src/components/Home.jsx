import React from 'react';

const Home = (props) => {
  return (
    <div className="app-home">
      <div className="app-home__header">
        Welcome
      </div>
      <div className="app-home__header__content">
        myForestry is a lorem ipsum kind of site.
      </div>
      <div className="app-home__subheader">
        About this site
      </div>
      <div className="app-home__subheader__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
};

Home.displayName = 'Home';

Home.propTypes = {};

export default Home;
