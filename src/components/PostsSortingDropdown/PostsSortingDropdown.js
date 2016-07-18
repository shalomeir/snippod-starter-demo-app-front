import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import classNames from 'classnames';
import $ from 'jquery';

const styles = {
  dropdown: {
    width: '12em',
    textAlign: 'center',
    marginRight: 0
  }
};

@Radium
export default class PostsSortingDropdown extends Component {
  static propTypes = {
    sortingOption: PropTypes.string.isRequired,
    changeSortingOption: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { sortingOption } = this.props;
    $('.ui.sorting-option.dropdown')
      .dropdown('set selected', sortingOption)
      .dropdown({
        onChange: (value) => {
          this.props.changeSortingOption(value);
        }
      })
    ;
  }

  componentWillUpdate(nextProps) {
    if (this.props.sortingOption !== nextProps.sortingOption) {
      $('.ui.sorting-option.dropdown')
        .dropdown('set selected', nextProps.sortingOption);
    }
  }

  render() {
    const { sortingOption } = this.props;
    return (
      <div className= {classNames('ui sorting-option floating dropdown labeled icon button')}
           style={ styles.dropdown }>
        <div className="text"/>
        <i className="sort content descending icon" />
        <div className="menu">
          <div className="item" value="newest" data-value="newest">
            Newest
          </div>
          <div className="item" value="upvotes" data-value="upvotes">
            Upvotes
          </div>
          <div className="item" value="comments" data-value="comments">
            Comments
          </div>
        </div>
      </div>
    );
  }
}
