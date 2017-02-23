import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../components';
import { navigationItems } from '../constants/NavigationConstants';
import { redirect } from '../services/RouteServices';

class NavigationContainer extends React.Component {
  static propTypes = {
    handleCloseNavigation: React.PropTypes.func,
  };

  handleRedirect = (route) => {
    navigationItems.pop();

    this.props.handleCloseNavigation();

    if (route === 'close') {
      return;
    }

    return redirect(route);
  }

  render() {
    if (this.props.mobileNavigation) {
      navigationItems.unshift({
        icon: 'times',
        route: 'close',
        title: 'Close',
      });
    }
    const props = {
      handleRedirect: this.props.handleRedirect,
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
