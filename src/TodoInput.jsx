import React, { Component } from 'react';

export default class TodoInput extends Component {
  // todo 历史记录
  todoHistory = [];

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }

  handleKeyup(e) {
    if (e.keyCode === 13) {
      this.props.onSubmit(e.target.value);
      this.setState({
        input: ''
      })
    }
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