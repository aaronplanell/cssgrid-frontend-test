import React, { Component } from 'react';
import './Switch.css';

class Switch extends Component {
  render() {
    const { changeVisibility, show } = this.props;
    return (
      <label className="switch">
        <input type="checkbox" checked={show} onChange={changeVisibility} />
        <span className="slider round"></span>
      </label>
    );
  }
}

export default Switch;
