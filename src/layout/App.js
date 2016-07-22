import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Card from './Card';

export default class App extends Component {

  render() {

    return (
      <div id="app" className="app" >
        <Card />
      </div>
    );
  }
}
