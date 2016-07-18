import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Card from './Card';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {

    return (
      <div id="app" className="app" >
        <Card />
      </div>
    );
  }
}
