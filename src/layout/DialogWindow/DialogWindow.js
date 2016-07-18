import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
  LoginDialog
} from 'containers';

export default class DialogWindow extends Component {

  static propTypes = {
    application: PropTypes.object.isRequired
  };

  render() {
    const { application } = this.props;

    let onboardsDialogs = null;

    if (application.loginDialog) {
      onboardsDialogs = (
        <div className="layout onboards show-overlay">
          <Helmet title="Login" />
          <LoginDialog />
        </div>
      );
    }

    return onboardsDialogs;
  }
}
