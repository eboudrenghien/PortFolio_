import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navbar from './components/Menu/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
      </div>
    );
  }
}

export default App;
