import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/greetings'>Greetings</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
          <li><Link to='/clock'>Clock</Link></li>
          <li><Link to='/timer'>Cooking Timers</Link></li>
          <li><Link to='/toastr'>Toastr</Link></li>
          <li><Link to='/todos'>Todos</Link></li>
          <li><Link to='/color-browser'>Color Browser</Link></li>
          <li><Link to='/quotes'>Quotes</Link></li>
          <li><Link to='/select'>React Select</Link></li>
          <li><Link to='/data-table'>Data Table</Link></li>
          <li><Link to='/mortgage'>Mortgage Calculator</Link></li>
          <li><Link to='/charts'>Sample Charts</Link></li>
          <li><Link to='/quiz'>Quiz App</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
