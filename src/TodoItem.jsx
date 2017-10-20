import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li className="todo-item">
        <span>{this.props.title}</span>
        <span>{this.props.date}</span>
      </li>
    );
  }
}