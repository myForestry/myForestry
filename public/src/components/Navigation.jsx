import React from 'react';

const Navigation = (props) => {
  return (
    <div className="app-navigation">
      <div className="app-navigation__item">
        <div className="app-navigation__item__icon">
          <i className="fa fa-home" aria-hidden="true"></i>
        </div>
        <div className="app-navigation__item__title">Home</div>
      </div>
      <div className="app-navigation__item">
        <div className="app-navigation__item__icon">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </div>
        <div className="app-navigation__item__title">Settings</div>
      </div>
      <div className="app-navigation__item">
        <div className="app-navigation__item__icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className="app-navigation__item__title">Search</div>
      </div>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
