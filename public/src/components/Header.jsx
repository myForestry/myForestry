import React from 'react';
import { redirect } from '../services/RouteServices';

const Header = (props) => {
  return (
    <div className="app-header">
      <div className="app-header__item" />
      <div className="app-header__item">
        <div className="app-header__title">
          myForestry
        </div>
        <div className="app-header__logo">
          <i className="fa fa-tree" aria-hidden="true"></i>
        </div>
      </div>
      <div className="app-header__item">
        <div onClick={() => redirect('/login')} className="app-header__login">
          Login
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
