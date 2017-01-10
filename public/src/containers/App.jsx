import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderContainer, NavigationContainer } from './';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  handleHamburger = () => {
    const overlayContainer  = document.createElement('div');
    document.body.insertBefore(overlayContainer, document.body.childNodes[0]);
    document.body.classList.add('overlay');
    document.getElementById("app-header-navigation-menu").style.width = "50%";
    // ReactDOM.render(<div className="app-header-navigation-menu">Hey worlds</div>, overlayContainer)
  }

  render() {
    return (
      <div className="app">
        <HeaderContainer handleHamburger={this.handleHamburger} />
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
