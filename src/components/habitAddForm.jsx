import React, { Component } from 'react';
import './habitAddForm.css';

class HabitAddForm extends Component {
  render() {
    return (
      <form className="add-form">
        <input className="add-input" type="text" placeHolder="Add your habit!"></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;