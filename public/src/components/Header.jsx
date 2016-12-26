import React from 'react';
import { redirect } from '../services/RouteServices';

const Header = (props) => {
  const {
    handleHamburger,
  } = props;

  return (
    <div className="app-header">
      <div className="app-header__item u-sm-h" />
      <div id="app-header-navigation-menu">
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
      </div>
      <div onClick={handleHamburger} className="app-header__item app-header-navigation u-sm-s">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
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

Header.propTypes = {
  handleHamburger: React.PropTypes.func,
};

export default Header;
