import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

export default class Button extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {

    return (
      <button className="ui red button" onClick={this.props.onClick} >
        Button
      </button>
    );
  }
}
