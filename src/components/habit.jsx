import React, { PureComponent } from 'react';
import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa';
import './habit.css';

class Habit extends PureComponent {
  // life cycle practice
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  }

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  }

  render() {
    console.log('habit rendered!');
    return (
      <>
        <tr className="habit">
          <td className="habit-name">{this.props.habit.name}</td>
          <td className="habit-counter">{this.props.habit.count}</td>
          <td><button className="habit-button habit-increment" onClick={this.handleIncrement}><FaPlusCircle /></button></td>
          <td><button className="habit-button habit-decrement" onClick={this.handleDecrement}><FaMinusCircle /></button></td>
          <td><button className="habit-button habit-delete" onClick={this.handleDelete}><FaTrash /></button></td>
        </tr>
      </>
    );
  }
}

export default Habit;