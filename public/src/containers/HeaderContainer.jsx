import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header } from '../components';

class HeaderContainer extends React.Component {
  static displayName = 'HeaderContainer';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <Header />
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
