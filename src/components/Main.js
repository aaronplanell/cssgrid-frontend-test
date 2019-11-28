import React, { Component } from 'react';
import '../App.css';

import Item from './Item';

class Main extends Component {
  componentDidMount() {
    console.log('Main');
  }

  componentWillUnmount() {
    console.log('Main');
  }

  render() {
    return (
      <main className='css-grid-example-2ndLevel'>
        <Item className='box id-box-a' id='A' />
        <Item className='box id-box-b' id='B' />
        <Item className='box id-box-c' id='C' />
        <Item className='box id-box-d' id='D' />
        <Item className='box id-box-e' id='E' />
        <Item className='box id-box-f' id='F' />
      </main>
    );
  }
}

export default Main;
