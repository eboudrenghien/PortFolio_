import React, { Component } from 'react';
import Footer from './components/footer/Footer';

import Navbar from './components/Menu/Navbar';
import Home from './pages/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        < Home />
        < Footer />
      </div>
    );
  }
}

export default App;
