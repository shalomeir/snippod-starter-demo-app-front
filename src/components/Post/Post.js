import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import $ from 'jquery';
import moment from 'moment';
import { shortenString } from 'utils/handleString';
import { getHostPathFromUrl } from 'utils/transformUrl';
import classNames from 'classnames';

import { Link as LinkComponent } from 'react-router';
const Link = Radium(LinkComponent);

const styles = require('./PostStyles');

@Radium
export default class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render() {
    const { post } = this.props;
    const postLink = getHostPathFromUrl(post.link);

    return (
      <div className="ui centered card" style={styles.card}>
        <div className="content" style={styles.cardHeader}>
          <div className="header" style={styles.title}>
            {shortenString(post.title, 44)}
            {post.title.length > 44 ? (<span className="after-gradient-effect" />) : null}
          </div>
        </div>
        <div className="content" style={styles.mainContent}>
          <div className="link-button ui center aligned container" style={styles.linkButtonContainer}>
            <a className="ui labeled icon blue basic button"
               href={post.link} target="_blank" style={styles.linkButton}>
              <i className="linkify icon" />
              {shortenString(postLink, 29)}
              {postLink.length > 29 ? (<span className="after-gradient-effect" />) : null}
            </a>
          </div>
          <Link className="user" to={'/user/' + post.author.id}>
            <i className="user circular inverted blue user small icon" />
            {shortenString(post.author.username, 13)}
          </Link>
          <div className="meta date" style={styles.meta}>
            {moment(post.createdAt).fromNow()}
          </div>
        </div>
      </div>
    );
  }
}
