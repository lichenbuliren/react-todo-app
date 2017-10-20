import React, { Component } from 'react';

import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    const length = this.props.list.length;
    let listItems = <li className="empty-row">暂无任务</li>
    if (length) {
      listItems = this.props.list.map((item) => <TodoItem title={item.title} date={item.date} />);
    }
    return (
      <ul className="todo-list">
        {listItems}
      </ul>
    );
  }
}