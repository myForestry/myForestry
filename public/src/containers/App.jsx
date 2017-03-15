import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderContainer from './HeaderContainer';
import NavigationContainer from './NavigationContainer';
import ServicesContainer from './ServicesContainer';
import AdvertisementsContainer from './AdvertisementsContainer';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <HeaderContainer />
        <NavigationContainer />
        <div className="app-content">
            <ServicesContainer />
            <div className="app-content__children">
              children!
            </div>
            <AdvertisementsContainer />
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
