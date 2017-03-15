import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ServicesContainer from './ServicesContainer';
// import AdvertisementsContainer from './AdvertisementsContainer';

class HomeContainer extends React.Component {
  static displayName = 'HomeContainer';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <div className="row app-content">
        <div className="col-sm-4">
          <ServicesContainer />
        </div>
        <div className="col-sm-8">
          {this.props.children}
        </div>
        {/* <div className="col-sm-2" >
          <AdvertisementsContainer />
        </div> */}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
