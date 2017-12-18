import React, { Component } from 'react';

import Todo from './TodoView';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) =>
            <Todo key={index} {...todo} onClick={() => {
              this.props.onToggleClick(index)
            }} />)
        }
      </ul>
    );
  }
}
