import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';

import { PostsSortingDropdown } from 'components';

const styles = {
  rightFloatedDropdown: {
    margin: 0,
    padding: 0,
    fontWeight: 'bold',
    fontSize: '0.8em'
  }
};

@Radium
export default class PostsHeader extends Component {

  static propTypes = {
    sortingOption: PropTypes.string.isRequired,
    changeSortingOption: PropTypes.func.isRequired
  };

  render() {
    const { sortingOption, changeSortingOption } = this.props;

    return (
      <div className="posts-header main-top-margin">
        <span className="ui header">Posts</span>
        <div className="ui right floated basic segment" style={styles.rightFloatedDropdown}>
          Sort by&nbsp;&nbsp;&nbsp;
          <PostsSortingDropdown sortingOption={sortingOption}
                                changeSortingOption={changeSortingOption} className="tiny blue"/>
        </div>
        <div className="ui divider"/>
      </div>
    );
  }
}
