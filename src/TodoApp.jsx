import React, { Component } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class TodApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div className="todo-app">
        <TodoInput value={this.state.value} onInputChange={this.handleInputChange} />
        <TodoList list={this.state.list} />
      </div>      
    );
  }
}