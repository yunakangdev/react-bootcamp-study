import React, { Component } from 'react';
import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa';
import './habit.css';

class Habit extends Component {

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    return (
      <>
        <li className="habit">
          <span className="habit-name">{this.props.habit.name}</span>
          <span className="habit-counter">{this.props.habit.count}</span>
          <button className="habit-button habit-increment" onClick={this.handleIncrement}><FaPlusCircle /></button>
          <button className="habit-button habit-decrement" onClick={this.handleDecrement}><FaMinusCircle /></button>
          <button className="habit-button habit-delete" onClick={this.handleDelete}><FaTrash /></button>
        </li>
      </>
    );
  }
}

export default Habit;