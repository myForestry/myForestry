import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Home } from '../components';


class HomeContainer extends React.Component {
  static displayName = 'Home Container';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <Home />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
