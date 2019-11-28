import React, { Component } from 'react';
import '../App.css';

import Switch from './Switch';

class Header extends Component {
  componentDidMount() {
    console.log('Header');
  }

  componentWillUnmount() {
    console.log('Header');
  }

  render() {
    return (
      <header><Switch changeVisibility={this.props.changeVisibility} show={this.props.show} /></header>
    );
  }
}

export default Header;
