import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sum from './Sum';

class App extends Component {
  render() {
    return (
      <div className="App">
        test
        <p>hey</p>
        <p>ho</p>
        <Sum a={2} b={3} />
        <Sum a={1241} b={3} />        
      </div>
    );
  }
}

export default App;
