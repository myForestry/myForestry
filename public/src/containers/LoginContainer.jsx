import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Login } from '../components';

class LoginContainer extends React.Component {
  static displayName = 'Login Container';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <Login {...props} />
    );
  }
}

function mapStateToProps(state) {
  const { example } = state;
  return {
    // example: example.examples,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // example: bindActionCreators(ExampleActions.exampleFunction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
