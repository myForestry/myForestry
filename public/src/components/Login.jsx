import React from 'react';
import { Button, Input } from '../patterns';

const Login = (props) => {
  const {
    handleChange,
    handleLoginClick,
  } = props;

  return (
    <form className="app-login">
      <Input name="username" label="Username / Email" onChange={handleChange} />
      <Input name="password" label="Password" onChange={handleChange} />

      <div className="app-login__button__group">
        <Button onClick={console.log('redirect to register.')} type="link">Register</Button>
        <Button onClick={handleLoginClick} type="primary">Login</Button>
      </div>
    </form>
  );
};

Login.displayName = 'Login';

Login.propTypes = {
  handleChange: React.PropTypes.func,
  handleLoginClick: React.PropTypes.func,
};

export default Login;
