import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Login } from '../components';
import * as AuthActions from '../actions/AuthActions';

class LoginContainer extends React.Component {
  static displayName = 'Login Container';

  static propTypes = {
    login: React.PropTypes.func,
  };

  state = {
    password: '',
    userName: '',
  };

  handleChange = (name, value) => {
    const newState = {};

    newState[name] = value;

    this.setState(newState);
  }

  handleLoginClick = () => {
    console.log('this state', this.state);
    return this.props.login(this.state);
  }

  render() {
    const props = {
      handleChange: this.handleChange,
      handleLoginClick: this.handleLoginClick,
    };

    return (
      <Login {...props} />
    );
  }
}

function mapStateToProps(state) {
  console.log('state in mapp', state);
  const { example } = state;
  return {
    // example: example.examples,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(AuthActions.login, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
