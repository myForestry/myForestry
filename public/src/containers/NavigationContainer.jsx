import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../components';

class NavigationContainer extends React.Component {
  static propTypes = {};

  render() {
    const props = {};

    return (
      <Navigation {...props} />
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
