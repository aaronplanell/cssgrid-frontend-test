import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  componentDidMount() {
    console.log('Footer');
    console.log('------------------------------');
  }

  componentWillUnmount() {
    console.log('Footer');
    console.log('------------------------------');
  }

  render() {
    return (
      <footer>Footer</footer>
    );
  }
}

export default Footer;
