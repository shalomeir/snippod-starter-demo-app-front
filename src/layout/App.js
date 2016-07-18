import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Helmet from 'react-helmet';
import head from 'constants/head';

import {
  DialogWindow,
  NavBar,
  Footer,
} from '.';

@connect(
  (state) => { return { application: state.application }; }
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    application: PropTypes.object.isRequired
  };

  render() {

    const { application } = this.props;

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
          <div id="background-app" className="background-app">
            <DialogWindow application={application} />
          </div>
        </StyleRoot>
      </div>
    );
  }
}
