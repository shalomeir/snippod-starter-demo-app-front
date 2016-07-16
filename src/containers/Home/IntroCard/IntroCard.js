import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import classNames from 'classnames';
import { hrefClick } from 'utils/handleEvent';

import { defineMessages, FormattedMessage } from 'react-intl';

const radiumStyles = require('theme/RadiumStyles');
import semanticVar from 'theme/semantic-variables';
const styles = {
  helloText: {
    fontWeight: 400
  },
  subText: {
    color: semanticVar['@invertedTextColor'],
    lineHeight: '1.9em'
  }
};

const i18n = defineMessages({
  helloSnippod: {
    id: 'home.introCard.helloSnippod',
    defaultMessage: 'Welcome to Snippod\'s Starter Demo Application!'
  },

  helloSnippodSubText: {
    id: 'home.introCard.helloSnippodSubText',
    defaultMessage: 'This full stack demo app is developed using {djangoRestFramework}' +
      ' and {react} + {redux}. Take a look at the {gitHubEn}.'
  }
});

@Radium
export default class IntroCard extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  render() {
    const { style } = this.props;

    //FixMe: Sometimes, ui class dom is not clickable by semantic problem.
    const djangoRestFramework = (<span className="ui blue small label link"
                                    href="http://www.django-rest-framework.org/"
                                    target="_blank" onClick={hrefClick}>django REST framework</span>);
    const react = (<span className="ui blue small label link"
                      href="https://facebook.github.io/react/index.html"
                      target="_blank" onClick={hrefClick}>React</span>);
    const redux = (<span className="ui blue small label link"
                      href="http://redux.js.org/"
                      target="_blank" onClick={hrefClick}>Redux</span>);
    const gitHubEn = (<a href="https://github.com/shalomeir/snippod-boilerplate"
                         target="_blank" style={radiumStyles.bold}>github repository</a>);
    const gitHubKr = (<a href="https://github.com/shalomeir/snippod-boilerplate"
                         target="_blank" style={radiumStyles.bold}>깃허브 저장소</a>);

    return (
      <div className="intro-card ui secondary inverted blue padded text segment center aligned"
           style={[radiumStyles.cardBoxShadow, radiumStyles.paddingBySize, style]}>
        <h2 style={styles.helloText}><FormattedMessage {...i18n.helloSnippod}/></h2>
        <p style={styles.subText}>
          <FormattedMessage {...i18n.helloSnippodSubText}
            values={{ djangoRestFramework, react, redux, gitHubEn, gitHubKr }}/>
        </p>
      </div>
    );
  }
}
