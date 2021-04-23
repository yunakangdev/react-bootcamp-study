import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  render() {
    return (
      <div className="input-container">
        <input className="input" type="text"></input>
        <button className="input-btn">Add</button>
      </div>
    );
  }
}

export default Input;