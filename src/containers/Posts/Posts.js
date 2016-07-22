import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadPostsBySortingOption } from 'ducks/postings/posts';
import { List, Post } from 'components';

import { POSTS_BY_SORTING_OPTION } from 'ducks/postings';

const radiumStyles = require('theme/RadiumStyles');

const mapStateToProps = createSelector([
  state => state.entities.posts,
  (state, props) => {
    const postingsByType = state.postings[POSTS_BY_SORTING_OPTION];
    if (postingsByType && postingsByType[props.option]) {
      return postingsByType[props.option];
    }
    return { ids: [] };
  }
], (posts, postsPagination) => {
  const postsPaginationList = postsPagination.ids.map(id => posts[id]);
  return {
    postsPagination,
    postsPaginationList
  };
});

@connect(
  mapStateToProps,
  { loadPostsBySortingOption }
)
@Radium
export default class Posts extends Component {

  static propTypes = {
    option: PropTypes.string.isRequired,
    postsPagination: PropTypes.object.isRequired,
    postsPaginationList: PropTypes.array.isRequired,
    loadPostsBySortingOption: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this._loadPosts = this._loadPosts.bind(this);
    this._handleLoadMoreClick = this._handleLoadMoreClick.bind(this);
    this.renderPost = this.renderPost.bind(this);
  }

  componentWillMount() {
    this._loadPosts(this.props.option);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.option !== nextProps.option) {
      this._loadPosts(nextProps.option);
    }
  }

  _loadPosts(option, nextPage) {
    this.props.loadPostsBySortingOption(option, nextPage);
  }

  _handleLoadMoreClick() {
    this._loadPosts(this.props.option, true);
  }

  renderPost(post) {
    if (post.deleted) return null;

    return (
      <div key={this.props.option + '-' + post.id} className="ui container"
           style={[radiumStyles.listMargin, radiumStyles.fullWidth]}>
        <Post post={post} />
      </div>
    );
  }

  render() {
    const { postsPagination, postsPaginationList } = this.props;

    return (
      <div className="posts ui container">
        <List className="one cards"
              renderItem={this.renderPost}
              items={postsPaginationList}
              onLoadMoreClick={this._handleLoadMoreClick}
              {...postsPagination} />
      </div>
    );
  }
}
