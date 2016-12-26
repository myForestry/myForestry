import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components';

class HeaderContainer extends React.Component {
  static propTypes = {};

  render() {
    const props = {};

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
