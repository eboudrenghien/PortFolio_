/* eslint-disable */
// eslint-disable-next-line 

import React, { Component } from 'react';
import Home from './pages/Home'
import Actualites from './pages/Actualites';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
