import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ShoppingList from './ShoppingList';
import Clock from './Clock';

class Todo extends Component {
  render() {
    return (
      <ShoppingList name="lichenbuliren"/>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);