import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from '../context/Context'


function Navbar() {
  const {user, dispatch} = useContext(Context)

  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="navbar">
      <ul> 
        <li className='navbarItem' onClick={handleLogout}>{user && <i className="fa-solid fa-power-off"></i>}</li>
        <li><Link className='navbarItem' to="/">ACCUEIL</Link></li>
        <li><Link className='navbarItem' to="/biographie">BIOGRAPHIE</Link></li>
        <li><Link className='navbarItem' to="/actualites">ACTUALITÉS</Link></li>
        <li><Link className='navbarItem' to="/ecrire">ÉCRIRE</Link></li>
        <li><Link className='navbarItem' to="/implants">IMPLANTS</Link></li>
        <li><Link className='navbarItem' to="/contact">CONTACT</Link></li>
      </ul>
    
      {
        user ? (
          <img className="navBarImg" src={user.profilPP} alt="" />
        ) : (
          <ul className='connexion'>
            
            <li><Link to="/connexion">CONNEXION</Link></li>
            <li><Link to="/senregistrer">S'ENREGISTRER</Link></li>
          </ul>
        )
      }
      </div>
    
  )
}

export default Navbar