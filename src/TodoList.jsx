import React, { Component } from 'react';

import TodoItem from './TodoItem';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleItemCheckedChange = this.handleItemCheckedChange.bind(this);
  }

  handleItemCheckedChange(isCompleted, index) {
    this.props.onItemCheckedChange(isCompleted, index);
  }

  render() {
    const length = this.props.list.length;
    let listItems = <li className="empty-row">暂无任务</li>
    if (length) {
      listItems = this.props.list.map((item, index) => <TodoItem key={index} title={item.title} date={item.date} isCompleted={item.isCompleted} onItemCheckedChange={(isCompleted) => this.handleItemCheckedChange(isCompleted, index)}/>);
    }
    return (
      <div className="todo-list-wrapper">
        <ul className="todo-list">
          {listItems}
        </ul>
      </div>
    );
  }
}