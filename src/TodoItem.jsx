import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    this.props.onItemCheckedChange(target.checked);
  }

  render() {
    return (
      <li className="todo-item">
        <div className="item-value">
          <span className="item-checked">
            <input name="isCompleted" value={this.props.isCompleted ? 1 : 0} type="checkbox" checked={this.props.isCompleted} onChange={this.handleChange}/>
          </span>
          <span className={"item-title " + (this.props.isCompleted ? 'item-completed': '')}>{this.props.title}</span>
        </div>
        <div className="item-date">{this.props.date}</div>
      </li>
    );
  }
}