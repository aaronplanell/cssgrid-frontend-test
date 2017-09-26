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
  render() {
    return (
        <section className='css-grid-example'>
          <Header />
          <Breadcrumb />
          <Left />
          <Main />
          <Right />
          <Footer />
        </section>
    );
  }
}

export default App;
