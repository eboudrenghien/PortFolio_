import React, { Component } from 'react';
import Home from './components/pages/home/Home';
import Navbar from './components/Menu/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
