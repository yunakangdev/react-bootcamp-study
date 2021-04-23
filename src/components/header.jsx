import React, { Component } from 'react';
import './header.css';
import { FaLeaf } from 'react-icons/fa';

class Header extends Component {
  render() {
    return (
      <header>
        <i className="leaf"><FaLeaf /></i>
        <span className="header-title">Habit Tracker</span>
        <span className="header-counter">{this.props.total}</span>
      </header>
    );
  }
}

export default Header;