import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { PostsHeader } from 'containers';

import { pushPath, pushQuery } from 'ducks/application/application';

@connect(
  null,
  { pushPath, pushQuery }
)
@Radium
export default class Home extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    pushPath: PropTypes.func.isRequired,
    pushQuery: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.moveToUser = this.moveToUser.bind(this);
    this._getSortingOptionFromQuery = this._getSortingOptionFromQuery.bind(this);
    this._setSortingOption = this._setSortingOption.bind(this);
    this.changeSortingOption = this.changeSortingOption.bind(this);
  }

  state = {
    sortingOption: 'newest'
  };

  componentWillMount() {
    this._setSortingOption(this._getSortingOptionFromQuery());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.sorting !== nextProps.location.query.sorting) {
      if (nextProps.location.query.sorting) {
        this._setSortingOption(nextProps.location.query.sorting);
      } else {
        this._setSortingOption('newest');
      }
    }
  }

  moveToUser() {
    this.props.pushPath('/user/' + this.refs.userId.value);
  }

  _getSortingOptionFromQuery() {
    if (this.props && this.props.location.query.sorting) {
      return this.props.location.query.sorting;
    }
    return 'newest';
  }

  _setSortingOption(sortingOption = 'newest') {
    if (this.state.sortingOption !== sortingOption) {
      this.setState({ sortingOption });
    }
  }

  changeSortingOption(sortingOption = 'newest') {
    if (this._getSortingOptionFromQuery() !== sortingOption) {
      this.props.pushQuery({ sorting: sortingOption });
    }
  }

  render() {
    return (
      <div className="home ui text container main-container">
        <Helmet title="Home"/>
        <div className="ui input">
          <input type="text" name="user" placeholder={'type user id'} ref="userId"/>
          <button type="button" className="ui grey button" onClick={this.moveToUser} > Go! </button>
        </div>
        <PostsHeader sortingOption={this.state.sortingOption}
                     changeSortingOption={this.changeSortingOption} />
      </div>
    );
  }
}
