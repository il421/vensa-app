import React, { Component } from 'react';
import Nav from './Nav';
import DatePicker from './DatePicker';


export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Nav>Header</Nav>
        <DatePicker></DatePicker>
      </header>
    );
  }
};

export default Header;
