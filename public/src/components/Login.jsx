import React from 'react';

const Login = (props) => {
  return (
    <form className="app-login">
      <div className="form-group">
        <label htmlFor="button">Username / Email</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="button">Password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="app-login__button__group">
        <button className="btn btn-link">Register</button>
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
};

Login.displayName = 'Login';

Login.propTypes = {};

export default Login;
