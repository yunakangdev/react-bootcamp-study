import React, { PureComponent } from 'react';
import './habitAddForm.css';

const HabitAddForm = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  
  const onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  return (
    <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
      <input
        ref={this.inputRef} 
        type="text" 
        className="add-input" 
        placeholder="Add your habit!"
      />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
