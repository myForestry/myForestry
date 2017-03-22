import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Services } from '../components';
import { hashHistory } from 'react-router';

class ServicesContainer extends React.Component {
  static displayName = 'ServicesContainer';

  static propTypes = {};

  state = {
    activeKey: 1,
  };

  fetchRoute = (id) => {
    let returnVal = 'foresters';

    switch (id) {
      case 2:
        returnVal = 'loggers';
        break;
      default:
        returnVal = 'foresters';
    }

    return returnVal;
  }

  handleSelect = (id) => {
    this.setState({ activeKey: id });

    // hashHistory.push(`/home/${this.fetchRoute(id)}`);
  }

  render() {
    const props = {
      activeKey: this.state.activeKey,
      handleSelect: this.handleSelect,
    };

    return <Services {...props} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer);
