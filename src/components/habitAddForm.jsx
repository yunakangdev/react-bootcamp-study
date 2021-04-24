import React, { Component } from 'react';
import './habitAddForm.css';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  
  onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('submit!');
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input className="add-input" type="text" placeholder="Add your habit!"></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;