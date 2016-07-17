import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {

    return (
      <div id="app" className="app" >
        Hello World by App.js!
      </div>
    );
  }
}
