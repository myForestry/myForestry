import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../components';
import { hashHistory } from 'react-router';
import { navigationItems } from '../constants/NavigationConstants';


class NavigationContainer extends React.Component {
  static propTypes = {};

  handleRedirect = route => hashHistory.push(route);

  render() {

    const props = {
      handleRedirect: this.handleRedirect,
      navigationItems,
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
