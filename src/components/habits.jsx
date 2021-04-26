import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
import './habits.css';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  }

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  }

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  }

  handleAdd = (name) => {
    this.props.onAdd(name);
  }

  render() {
    console.log('habits rendered!');
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd} />
        <table>
          <tbody>
          {
            this.props.habits.map((habit) => {
              return <Habit 
                        key={habit.id} 
                        habit={habit}
                        onIncrement={this.handleIncrement} 
                        onDecrement={this.handleDecrement} 
                        onDelete={this.handleDelete} 
                    />
            })
          }
          </tbody>
        </table>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;