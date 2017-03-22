import React from 'react';
import { Button } from 'rhinostyle';

const Header = (props) => {
  const {
    handleLoginClick,
  } = props;

  return (
    <div className="app-header row">
      <div className="col-xs-9">
        <div>Forestry Services</div>
        <div>Logo goes here</div>
      </div>
      <div className="col-xs-3 u-text-right">
        <Button onClick={handleLoginClick} type="link">
          Login
        </Button>
      </div>
    </div>
  );
};

Header.displayName = 'Header';

Header.propTypes = {};

export default Header;
