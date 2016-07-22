import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import { Link as LinkComponent } from 'react-router';
const Link = Radium(LinkComponent);

import responsivePoint from 'theme/semantic-variables';
const radiumStyles = require('theme/RadiumStyles');
const styles = require('./NavBarStyles');

@Radium
export default class NavBar extends Component {

  render() {

    const logo = (
      <Link to="/" href="#" className="header item">
        <img className="logo" src="/images/logo.png" style={styles.logoImage}/>
        <MediaQuery maxWidth={responsivePoint['@tabletLesspoint']}>
          <header className="header" style={styles.title}> Snippod{(<br/>)}Starter-Demo </header>
        </MediaQuery>
        <MediaQuery minWidth={responsivePoint['@tabletBreakpoint']}>
          <header className="header" style={styles.title}> Snippod-Starter-Demo </header>
        </MediaQuery>
      </Link>
    );

    const rightMenu = (
      <div className="logged-in right menu" style={styles.menuItem}>
        <Link to="/setting" className="blue item" style={[styles.menuItem, styles.mobileItem]}>
          <span className="setting-text">Setting</span>
        </Link>
      </div>
    );

    return (
      <nav className={classNames('navbar ui top fixed borderless menu')}>
        <div className="ui container">
          {logo}
          {rightMenu}
        </div>
      </nav>
    );
  }
}
