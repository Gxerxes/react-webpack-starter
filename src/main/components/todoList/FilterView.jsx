import React, { Component } from 'react'

import { visibilityType } from './todoAction'

export default class Filter extends Component {

  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }
    else {
      return (
        <a href="#" onClick={
          e => {
            e.preventDefault();
            this.props.onFilterChange(filter);
          }
        }>
          {name}
        </a>
      )
    }
  }

  render() {
    return (
      <div>
        Please choose:
        {' '}
        {this.renderFilter(visibilityType.SHOW_ALL, 'All')}
        {' '}
        {this.renderFilter(visibilityType.SHOW_COMPLETED, 'completed')}
        {' '}
        {this.renderFilter(visibilityType.SHOW_ACTIVE, 'active')}
      </div>
    );
  }
}
