import React from 'react';
import { connect } from 'react-redux';
import { Settings } from '../components';


class SettingsContainer extends React.Component {
  static propTypes = {};

  render() {
    const props = {};

    return (
      <Settings {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
