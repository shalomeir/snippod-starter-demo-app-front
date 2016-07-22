import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';

export default class Home extends Component {

  render() {
    return (
      <div className="home ui text container main-container">
        <Helmet title="Home"/>
        This is a Home.
      </div>
    );
  }
}
