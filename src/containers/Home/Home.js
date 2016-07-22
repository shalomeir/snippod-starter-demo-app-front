import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { pushPath } from 'ducks/application/application';

@connect(
  null,
  { pushPath }
)
@Radium
export default class Home extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    pushPath: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.moveToUser = this.moveToUser.bind(this);
  }

  moveToUser() {
    this.props.pushPath('/user/' + this.refs.userId.value);
  }

  render() {
    return (
      <div className="home ui text container main-container">
        <Helmet title="Home"/>
        <div className="ui input">
          <input type="text" name="user" placeholder={'type user id'} ref="userId"/>
          <button type="button" className="ui grey button" onClick={this.moveToUser} > Go! </button>
        </div>
      </div>
    );
  }
}
