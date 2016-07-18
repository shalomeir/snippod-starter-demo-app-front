import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Button from './Button';

export default class Card extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: '디폴트 제목입니다.'
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
    this.setState({ color: 'green' });
  }

  render() {

    return (
      <div className={classNames('ui inverted padded text segment center aligned', this.state.color)}>
        <h2>{this.props.title}</h2>
        <p>
          만나서 반갑습니다.
        </p>
        <Button onClick={this.changeColor}/>
      </div>
    );
  }
}
