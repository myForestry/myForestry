import React from 'react';

const Navigation = (props) => {
  const {
    handleRedirect,
    navigationItems,
  } = props;
  console.log('navigationItems', navigationItems);

  return (
    <div className="app-navigation">
      <div onClick={() => handleRedirect('/home')} className="app-navigation__item">
        <div className="app-navigation__item__icon">
          <i className="fa fa-home" aria-hidden="true"></i>
        </div>
        <div className="app-navigation__item__title">Home</div>
      </div>
      <div className="app-navigation__item">
        <div className="app-navigation__item__icon">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="app-navigation__item__title">Profile</div>
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

Navigation.propTypes = {
  handleRedirect: React.PropTypes.func,
  navigationItems: React.PropTypes.array,
};

export default Navigation;
