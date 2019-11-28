import React, { Component } from 'react';
import '../App.css';

class Breadcrumb extends Component {
  componentDidMount() {
    console.log('Breadcrumb');
  }

  componentWillUnmount() {
    console.log('Breadcrumb');
  }

  render() {
    return (
      <div className="breadcrumb">Breadcrumb</div>
    );
  }
}

export default Breadcrumb;
