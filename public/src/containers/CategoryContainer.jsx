import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Category } from '../components';

class CategoryContainer extends React.Component {
  static displayName = 'CategoryContainer';

  static propTypes = {};

  state = {
    category: this.props.params.id,
  };

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.setState({ category: newProps.params.id });
    }
  }

  render() {
    const props = {
      category: this.state.category,
    };

    return (
      <Category {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
