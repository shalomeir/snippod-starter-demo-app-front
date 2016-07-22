import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import _ from 'lodash';
import $ from 'jquery';
import classNames from 'classnames';

import { connect } from 'react-redux';

import { closeDialog } from 'ducks/application/application';

const styles = require('./DialogStyles');

@connect(
  null,
  { closeDialog }
)
@Radium
export default class LoginDialog extends Component {

  static propTypes = {
    closeDialog: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this._closeDialog = this._closeDialog.bind(this);
  }

  componentDidMount() {
    $('.ui.login.modal')
      .modal({
        detachable: false,
        onHidden: this._closeDialog
      })
      .modal('show');
  }

  _closeDialog() {
    console.log('close login dialog');
    $('.ui.login.modal').modal('hide dimmer');
    this.props.closeDialog();
  }

  render() {
    return (
      <div className="login dialog ui small modal" >
        <i className="close icon" />
        <h2 className="ui image header blue">
          <img src="images/logo.png" className="image" style={ styles.logo }/>
          <div className="content">
            Log-in to your account
          </div>
        </h2>
      </div>
    );
  }
}
