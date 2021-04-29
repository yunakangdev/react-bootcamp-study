import React, { Component } from 'react';
import './app.css';
import Header from './components/header';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Dancing', count: 0 },
    ]
  }

  handleIncrement = (habit) => {
    // changing count in the habits directly - not a good way!
    // because 
    // let habits = [...this.state.habits];
    // let index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({ habits });
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  }

  handleDecrement = (habit) => {
    const habits =this.state.habits.map((item) => {
      if (item.id === habit.id) {
        let count = habit.count <= 0 ? 0 : habit.count - 1;
        return {...habit, count: count};
      }
      return item;
    });
    this.setState({ habits });
  }

  handleDelete = (habit) => {
    let habits = this.state.habits.filter((item) => {
      return item.id !== habit.id;
    });
    this.setState({ habits });
  }

  handleAdd = (name) => {
    // const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }];
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  }

  handleReset = () => {
    // let habits = [...this.state.habits];
    // habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    // this.setState({ habits });
    let habits = this.state.habits.map((item) => {
      return { ...item, count: 0 };
    });
    this.setState({ habits });
  }

  render() {
    console.log('app rendered!');
    const { habits } = this.state;

    return (
      <div className="app">
        <Header totalCount={this.state.habits.filter((item) => item.count > 0).length}/>
        <Habits habits={habits} 
                onIncrement={this.handleIncrement} 
                onDecrement={this.handleDecrement} 
                onDelete={this.handleDelete} 
                onAdd={this.handleAdd}
                onReset={this.handleReset}
                />
      </div>
    );
  }
}

export default App;