import React, { Component, PropTypes } from 'react';

export default class Card extends Component {

  render() {

    return (
      <div className="ui inverted blue padded text segment center aligned">
        <h2>웰컴!</h2>
        <p>
          만나서 반갑습니다.
        </p>
      </div>
    );
  }
}
