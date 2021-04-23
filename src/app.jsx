import React, { Component } from 'react';
import './app.css';
import Header from './components/header';
import Habits from './components/habits';
import Input from './components/input';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Dancing', count: 0 },
    ],
    total: 0
  }

  handleIncrement = (habit) => {
    console.log(habit.name)
    let habits = [...this.state.habits]
    let index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits })
  }

  handleDecrement = (habit) => {
    let habits = [...this.state.habits]
    let index = habits.indexOf(habit)
    habits[index].count = habits[index].count <= 0 ? 0 : habits[index].count - 1
    this.setState({ habits })
  }

  handleDelete = (habit) => {
    let habits = this.state.habits.filter((item) => {
      return item.id !== habit.id
    })
    this.setState({ habits })
  }

  render() {
    const { habits } = this.state
    const { total } = this.state

    return (
      <div className="app">
        <Header habits={habits} total={total} />
        <Input />
        <Habits habits={habits} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;