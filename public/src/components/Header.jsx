import React from 'react';

const Header = (props) => {
  return (
    <div className="app-header">
      <div className="app-header__title">
        myForestry
      </div>
      <div className="app-header__logo">
        <i className="fa fa-tree" aria-hidden="true"></i>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
