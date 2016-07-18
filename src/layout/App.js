import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import { StyleRoot } from 'radium';

import Helmet from 'react-helmet';
import head from 'constants/head';

import {
  NavBar,
  Footer,
} from '.';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {

    return (
      <div id="app" className="app">
        <Helmet {...head}/>
        <StyleRoot >
          <div id="full-screen" className="fullscreen pushable">
            <div id="main-app" className="main-app pusher">
              <div id="wrap-content">
                <NavBar />
                <main id="main-content">
                  {this.props.children}
                </main>
              </div>
              <Footer />
            </div>
          </div>
        </StyleRoot>
      </div>
    );
  }
}
