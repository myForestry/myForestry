import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header } from '../components';
import {
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSystem,
  Select,
  UtilityInlineGrid,
} from 'rhinostyle';

class HeaderContainer extends React.Component {
  static displayName = 'HeaderContainer';

  static propTypes = {};

  state = {
    username: '',
    password: '',
    password2: '',
    businessName: '',
    phone: '',
    email: '',
    service: 1,
    category: 1,
    street: '',
    city: '',
    state: '',
    zip: null,
  };

  handleChange = (name, value) => {
    const newState = {};

    newState[name] = value;

    this.setState(newState);
  }

  handleSelect = (name, value) => {
    const newState = {};

    newState[name] = value;

    this.setState(newState);
  }

  closeModal = () => {
    ModalSystem.removeModal();
  }

  handleLoginClick = () => {
    ModalSystem.addModal(this.renderLoginModal());
  }

  handleLogin = () => {
    console.log('this.state', this.state);
  }

  handleRegisterClick = () => {
    ModalSystem.addModal(this.renderRegisterModal());
  }

  handleRegister = () => {
    console.log('this.state', this.state);
  }

  renderLoginModal = () => {
    return (
      <Modal>
        <ModalHeader className="u-text-center" title="Login to Forestry Services" />
        <ModalBody>
          <Input label="Username" name="username" initialValue={this.state.username} onChange={this.handleChange} />
          <Input type="password" className="u-m-b-0" label="Password" name="password" initialValue={this.state.password} onChange={this.handleChange} />
        </ModalBody>
        <ModalFooter>
          <UtilityInlineGrid size="small" align="right">
            <Button type="link" onClick={this.handleRegisterClick}>Register</Button>
            <Button type="primary" onClick={this.handleLogin}>Login</Button>
          </UtilityInlineGrid>
        </ModalFooter>
      </Modal>
    );
  }

  renderRegisterModal = () => {
    const selectOpts = [
      { id: 1, value: 'Option One' },
      { id: 2, value: 'Option Two' },
      { id: 3, value: 'Option Three' },
      { id: 4, value: 'Option Four' },
    ];

    return (
      <Modal>
        <ModalHeader className="u-text-center" title="Register for Forestry Services" />
        <ModalBody>
          <Input label="Username" name="username" initialValue={this.state.username} onChange={this.handleChange} />
          <Input type="password" label="Password" name="password" initialValue={this.state.password} onChange={this.handleChange} />
          <Input type="password" label="Retype Password" name="password2" initialValue={this.state.password2} onChange={this.handleChange} />
          <Input label="Business Name" name="businessName" initialValue={this.state.businessName} onChange={this.handleChange} />
          <div className="row">
            <Input className="col-sm-6" label="Phone" name="phone" initialValue={this.state.phoneNumber} onChange={this.handleChange} />
            <Input className="col-sm-6" label="Email" name="email" initialValue={this.state.emailAddress} onChange={this.handleChange} />
          </div>
          <div className="row">
           <Select className="col-sm-6" onSelect={this.handleSelect} selected={this.state.service} name="service" label="Service" options={selectOpts} />
           <Select className="col-sm-6" onSelect={this.handleSelect} selected={this.state.category} name="category" label="Category" options={selectOpts} />
          </div>
          <div>
           <Input placeholder="ex. 1 King St." initialValue={this.state.street} onChange={this.handleChange} label="Address" name="street" />
           <div className="row row--condensed">
             <div className="col-sm-7">
               <Input placeholder="ex. Charleston" initialValue={this.state.city} onChange={this.handleChange} label="City" name="city" />
             </div>
             <div className="col-sm-2">
               <Input placeholder="ex. SC" initialValue={this.state.state} onChange={this.handleChange} label="State" name="state" />
             </div>
             <div className="col-sm-3">
               <Input placeholder="ex. 29403" initialValue={this.state.zip} onChange={this.handleChange} label="Zip" name="zip" />
             </div>
           </div>
           </div>
        </ModalBody>
        <ModalFooter>
          <UtilityInlineGrid size="small" align="right">
            <Button type="primary" onClick={this.handleRegister}>Register</Button>
          </UtilityInlineGrid>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    const props = {
      handleLoginClick: this.handleLoginClick,
    };

    return (
      <Header {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
