import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navigation } from '../components';

class NavigationContainer extends React.Component {
  static displayName = 'NavigationContainer';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <Navigation />
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
