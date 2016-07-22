import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';
import $ from 'jquery';
import classNames from 'classnames';

import { reduxForm } from 'redux-form';

const styles = require('./SettingStyles');

@Radium
export default class Setting extends Component {

  componentDidMount() {
    $('.ui.settings.accordion')
      .accordion({
        selector: {
          trigger: '.title.setting.header'
        }
      })
    ;
  }

  render() {

    const settingLanguage = (
      <div className="ui compact segment" style={styles.settingSegment}>
        <label style={styles.settingLabel}>My Language</label>
        Language Dropdown
      </div>
    );

    const settingDom = (
      <div className="ui styled fluid settings accordion">
        <div className="title ui setting header active" style={styles.settingHeader}>
          <i className="dropdown icon"/>
          Language
        </div>
        <div className="content active">
          {settingLanguage}
        </div>
        <div className="title ui setting header" style={styles.settingHeader}>
          <i className="dropdown icon"/>
          Change password
        </div>
        <div className="content">
          settingChangePassword
        </div>
        <div className="title ui setting header" style={styles.settingHeader}>
          <i className="dropdown icon"/>
          delete Account
        </div>
        <div className="content">
          settingDeleteAccount
        </div>
      </div>
    );

    return (
      <div className="setting ui text container main-container">
        <Helmet title="Setting" />
        <h1 className="ui header">
          Setting
          <div className="sub header">
            Setup your language or change your password.
          </div>
        </h1>
        {settingDom}
      </div>
    );
  }
}
