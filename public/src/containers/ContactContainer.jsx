import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ContactContainer extends React.Component {
  static displayName = 'ContactContainer';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <div>Hello from ContactContainer</div>
    );
  }
}

function mapStateToProps(state) {
  const { example } = state;
  return {
    // example: example.examples,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // example: bindActionCreators(ExampleActions.exampleFunction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
