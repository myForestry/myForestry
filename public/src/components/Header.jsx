import React from 'react';
import { Button } from 'rhinostyle';

const Header = (props) => {
  const {
    handleLoginClick,
  } = props;

  return (
    <div className="app-header">
      <div>
        <div>Forestry Services</div>
      </div>
      <div>
        <Button onClick={handleLoginClick} type="link">
          Login / Register
        </Button>
      </div>
    </div>
  );
};

Header.displayName = 'Header';

Header.propTypes = {};

export default Header;
