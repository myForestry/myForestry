import React, { Component } from 'react';

export default class Input extends Component {
  static propTypes = {
    initialValue: React.PropTypes.string,
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
  }

  state = {
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) this.setState({ value: this.props.initialValue });
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });

   if (this.props.onChange && typeof (this.props.onChange === 'function')) this.props.onChange(event.target.name, event.target.value);
  }

  render() {
    const { label, placeholder, name } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input className="form-control" name={name} onChange={this._handleChange} type="text" value={this.state.value} placeholder={placeholder} />
      </div>
    );
  }
}
