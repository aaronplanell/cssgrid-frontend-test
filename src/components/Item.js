import React, { Component } from 'react';
import '../App.css';

class Item extends Component {
  componentDidMount() {
    console.log('Item ' + this.props.id);
  }

  componentWillUnmount() {
    console.log('Item ' + this.props.id);
  }

  render() {
    return (
      <div className={this.props.className}>{this.props.id}</div>
    );
  }
}

export default Item;
