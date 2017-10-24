import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class TodApp extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const dateStr = date.toLocaleDateString();
    const dateTime = date.toLocaleTimeString();
  
    this.state = {
      value: '',
      list: [{
        title: '今晚去唱歌',
        date: `${dateTime} ${dateStr}`,
        isCompleted: true
      }, {
        title: '学习 React',
        date: `${dateTime} ${dateStr}`,
        isCompleted: false
      }]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      value
    });
  }

  handleSubmit(value) {
    const list = [].concat(this.state.list);
    const date = new Date();
    const dateStr = date.toLocaleDateString();
    const dateTime = date.toLocaleTimeString();
    list.push({
      title: value,
      date: `${dateTime} ${dateStr}`,
      isCompleted: false
    });
    this.setState({
      value: '',
      list
    });
  }

  handleCheckedChange(value, index) {
    var list = [].concat(this.state.list);
    list[index].isCompleted = value;
    this.setState({
      list
    });
  }

  render() {
    return (
      <div className="todo-app">
        <TodoInput value={this.state.value} onInputChange={this.handleInputChange} onSubmit={this.handleSubmit}/>
        <TodoList list={this.state.list} onItemCheckedChange={this.handleCheckedChange} />
      </div>      
    );
  }
}