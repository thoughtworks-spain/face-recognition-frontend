import React, { Component } from 'react';
import WebcamCapture from './components/WebcamCapture/WebcamCapture';
import animation from './animation.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={animation} className="App-animation" alt="logo" />
        </header>
        <WebcamCapture />
      </div>
    );
  }
}

export default App;
