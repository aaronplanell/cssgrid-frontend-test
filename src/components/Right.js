import React, { Component } from 'react';
import '../App.css';

class Right extends Component {
  componentDidMount() {
    console.log('Right');
  }

  componentWillUnmount() {
    console.log('Right');
  }

  render() {
    return (
      <div className="aside-right">Right</div>
    );
  }
}

export default Right;
