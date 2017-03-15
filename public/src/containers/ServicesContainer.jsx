import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Services } from '../components';

class ServicesContainer extends React.Component {
  static displayName = 'ServicesContainer';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return <Services />;
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer);
