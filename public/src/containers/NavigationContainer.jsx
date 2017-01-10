import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../components';
import { navigationItems } from '../constants/NavigationConstants';
import { redirect } from '../services/RouteServices';

class NavigationContainer extends React.Component {
  static propTypes = {};

  render() {
    const props = {
      navigationItems,
      redirect,
    };

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
