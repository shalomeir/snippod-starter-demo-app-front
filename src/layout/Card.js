import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Button from './Button';

export default class Card extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    color2: PropTypes.string,
    changeColor: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: '디폴트 제목입니다.'
  };

  state = {
    color: null
  };

  componentWillMount() {
    if (this.props.color === 'blue' && this.props.color2) {
      this.setState({ color: 'pink' });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.color2) {
      if (nextProps.color === 'green') {
        this.setState({ color: this.props.color2 });
      } else {
        this.setState({ color: nextProps.color });
      }
    }
  }

  render() {

    const color = this.state.color ? this.state.color : this.props.color;

    return (
      <div className={classNames('ui inverted padded text segment center aligned', color)}>
        <h2>{this.props.title}</h2>
        <p>
          만나서 반갑습니다.
        </p>
        <Button onClick={this.props.changeColor}/>
      </div>
    );
  }
}
