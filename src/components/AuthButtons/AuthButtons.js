import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import $ from 'jquery';
import classNames from 'classnames';

import { showLoginDialog } from 'ducks/application/application';

const styles = {
  button: {
    width: '5.8em',
    textAlign: 'center',
    paddingLeft: 'inherit',
    paddingRight: 'inherit'
  }
};

@connect(
  null,
  { showLoginDialog }
)
@Radium
export default class AuthButtons extends Component {
  static propTypes = {
    showLoginDialog: PropTypes.func.isRequired
  };

  render() {

    const authButtons = (
      <div className= {classNames('ui buttons')}>
        <button className="ui blue basic button" style={ styles.button }
                onClick={this.props.showLoginDialog}>
          Login
        </button>
      </div>
    );

    return authButtons;
  }
}
