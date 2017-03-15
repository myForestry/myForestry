import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Advertisements } from '../components';

class AdvertisementsContainer extends React.Component {
  static displayName = 'AdvertisementsContainer';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return <Advertisements />;
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

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementsContainer);
