import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderContainer, NavigationContainer } from './';

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
          {this.props.children}
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
