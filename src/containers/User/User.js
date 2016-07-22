import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class User extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  };

  render() {
    const { params } = this.props;

    const accountDom = (
      <div id="capture-and-fire">
        <div className="post-list" >
          User ID : {params.userId}
        </div>
      </div>
    );

    return (
      <div className="user-home ui text container main-container">
        {accountDom}
      </div>
    );
  }
}
