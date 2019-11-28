import React, { Component } from 'react';
import '../App.css';

class Left extends Component {
  componentDidMount() {
    console.log('Left');
  }

  componentWillUnmount() {
    console.log('Left');
  }

  render() {
    return (
      <div className="aside-left">Left</div>
    );
  }
}

export default Left;
