/* eslint-disable */
// eslint-disable-next-line 

import React, {useContext } from 'react';
import Home from './pages/Home';
import Biographie from './pages/Biographie'
import Actualites from './pages/Actualites';
import Implants from './pages/Implants'
import Contact from './pages/Contact'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Menu/Navbar';
import Footer from './components/footer/Footer';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register.jsx';
import Single from './pages/Single';
import Write from './pages/Write';
import { Context } from './context/Context';

function App() {
    const {user} = useContext(Context)
    return (
      
        <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/senregistrer" element={user ? <Home/> : <Register />} />
          <Route path="/connexion" element={user ? <Home/> : <Login />} />
          <Route path="/reglages" element={user ? <Settings /> : <Register />} />
          <Route path="/biographie" element={<Biographie />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:id" element={<Single/>} />
          <Route path='/ecrire' element={user ? <Write/> : <Register/>} />
          <Route path="/implants" element={<Implants />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
        </BrowserRouter>
     
  
  )
}

export default App;

// path="profil/:id" pour que cela mène au profil de l'utilisateur seulement
