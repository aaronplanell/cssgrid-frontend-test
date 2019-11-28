import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Left from './components/Left';
import Main from './components/Main';
import Right from './components/Right';
import Footer from './components/Footer';

class App extends Component {
  state = { show: true };

  componentDidMount() {
    console.log('App');
  }

  componentWillUnmount() {
    console.log('App');
  }

  changeVisibility = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const header = <Header changeVisibility={this.changeVisibility} show={this.state.show} />;
    if (this.state.show) {
      return (
        <section className='css-grid-example'>
          {header}
          <Breadcrumb />
          <Left />
          <Main />
          <Right />
          <Footer />
        </section>
      );
    } else {
      return (
        <section className='css-grid-example'>
          {header}
        </section>
      );
    }
  }
}

export default App;
