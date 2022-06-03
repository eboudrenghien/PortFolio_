/* eslint-disable */
// eslint-disable-next-line 

import React, { Component } from 'react';
import Home from './pages/Home';
import Biographie from './pages/Biographie'
import Actualites from './pages/Actualites';
import Implants from './pages/Implants'
import Contact from './pages/Contact'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Menu/Navbar';
import Footer from './components/footer/Footer';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register.jsx';
import Single from './pages/Single';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/senregistrer" element={<Register />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/reglages" element={<Settings />} />
          <Route path="/biographie" element={<Biographie />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:id" element={<Single/>} />
         
          <Route path="/implants" element={<Implants />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;

// path="profil/:id" pour que cela mène au profil de l'utilisateur seulement
