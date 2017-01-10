import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    onClick: React.PropTypes.func,
    type: React.PropTypes.oneOf(['default', 'link', 'primary', 'secondary', 'danger', 'warning']),
  }

  _handleClick = (event) => {
    event.preventDefault();

    if (this.props.onClick && typeof this.props.onClick === 'function') this.props.onClick();
  }

  render() {
    const { className, type } = this.props;

    const classes = cx('btn', className, {
      'btn-default': type === 'default',
      'btn-link': type === 'link',
      'btn-secondary': type === 'secondary',
      'btn-primary': type === 'primary',
      'btn-warning': type === 'warning',
      'btn-danger': type === 'danger',
    });

    return (
      <button className={classes} onClick={this._handleClick}>{this.props.children}</button>
    );
  }
}
