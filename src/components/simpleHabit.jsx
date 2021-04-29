import React, { Component } from 'react';

class SimpleHabit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
  }
}

export default SimpleHabit;
