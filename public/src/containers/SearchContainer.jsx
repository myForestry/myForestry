import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Search } from '../components';

class SearchContainer extends React.Component {
  static displayName = 'Search Container';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <Search {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
