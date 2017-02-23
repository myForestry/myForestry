import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderContainer, NavigationContainer } from './';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {
    mobileNavigation: false,
  }

  handleHamburger = () => {
    const appNav = document.getElementById('app-navigation');

    appNav.style.width = '100%';

    for (let i = 0; i < appNav.children.length; i++) {
      appNav.children[i].style.display = 'flex';
    }

    this.setState({ mobileNavigation: true });
  }

  handleCloseNavigation = () => {
    const appNav = document.getElementById('app-navigation');

    appNav.style.width = '0rem';

    for (let i = 0; i < appNav.children.length; i++) {
      appNav.children[i].style.display = 'none';
    }

    this.setState({ mobileNavigation: false });
  }

  render() {
    return (
      <div className="app">
        <HeaderContainer handleHamburger={this.handleHamburger} />
        <NavigationContainer handleCloseNavigation={this.handleCloseNavigation} mobileNavigation={this.state.mobileNavigation} />
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
