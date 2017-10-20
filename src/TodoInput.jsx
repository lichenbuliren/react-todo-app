import React, { Component } from 'react';

export default class TodoInput extends Component {
  // todo 历史记录
  todoHistory = [];

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }

  handleKeyup(e) {
    
  }
  
  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    return (
      <div className="todo-input">
        <input type="text" value={this.props.value} onChange={this.handleChange} onKeyUpCapture={this.handleKeyup}/>
      </div>
    );
  }
}