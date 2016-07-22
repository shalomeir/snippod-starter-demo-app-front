import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

const styles = require('./FooterStyles');

@Radium
export default class Footer extends Component {

  render() {
    const githubButton = (<iframe src="https://ghbtns.com/github-btn.html?user=shalomeir&repo=snippod-starter-demo-app&type=star&count=true" frameBorder="0" scrolling="0" width="90px" height="20px"
                                  style={styles.githubButton} key="github-iframe-button"/>);

    return (
      <footer id="footer" className="layout ui footer inverted vertical segment" style={styles.layout} key="footer">
        <div className="ui center aligned container">
          <img src="/images/logo.png" className="ui centered mini image" />
          <div className="ui horizontal inverted small list" style={styles.lineHeight}>
            This is a open source application. Go to the repository.
            &nbsp; &nbsp; {githubButton}
          </div>
        </div>
      </footer>
    );
  }
}
