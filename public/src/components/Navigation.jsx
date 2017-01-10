import React from 'react';

const Navigation = (props) => {
  const {
    redirect,
    navigationItems,
  } = props;

  const renderNavigationItem = (item, key) => {
    return (
      <div key={key} onClick={() => redirect(`${item.route}`)} className="app-navigation__item">
        <div className="app-navigation__item__icon">
          <i className={`fa fa-${item.icon}`} aria-hidden="true"></i>
        </div>
        <div className="app-navigation__item__title">{item.title}</div>
      </div>
    );
  }

  return (
    <div className="app-navigation">
      {navigationItems.map(renderNavigationItem)}
    </div>
  );
};

Navigation.propTypes = {
  handleActive: React.PropTypes.func,
  navigationItems: React.PropTypes.array,
};

export default Navigation;
