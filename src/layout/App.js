import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Card from './Card';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.changeColor = this.changeColor.bind(this);
  }

  state = {
    color: 'blue'
  };

  changeColor() {
    console.log('click button');
    if (this.state.color !== 'green') {
      this.setState({ color: 'green' });
    } else {
      this.setState({ color: 'blue' });
    }
  }

  render() {

    return (
      <div id="app" className="app" >
        <Card title="Welcome" color={this.state.color} changeColor={this.changeColor}/>
        <Card color={this.state.color} changeColor={this.changeColor} />
        <Card color={this.state.color} color2={'black'} changeColor={this.changeColor} />
      </div>
    );
  }
}
