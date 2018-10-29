import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SomeRandomComponent from './components/SomeRandomComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SomeRandomComponent />
      </div>
    );
  }
}

export default App;
