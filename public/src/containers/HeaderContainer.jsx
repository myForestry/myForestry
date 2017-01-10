import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components';

class HeaderContainer extends React.Component {
  static propTypes = {
    handleHamburger: React.PropTypes.func,
  };

  render() {
    const props = {
      handleHamburger: this.props.handleHamburger,
    };

    return (
      <Header {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
