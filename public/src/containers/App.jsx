import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderContainer from './HeaderContainer';
import NavigationContainer from './NavigationContainer';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <HeaderContainer />
        <NavigationContainer />
        {this.props.children}
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
