import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from '../context/Context'


function Navbar() {
  const {user, dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="navbar">
      <ul className='navbarUl'> 
        <li className='logout' onClick={handleLogout} title='Déconnexion'>{user && <ion-icon name="power-outline" style={{color:"white"}} ></ion-icon>}</li>
        <li><Link className='navbarItem' to="/" title='Home'><ion-icon name="home-outline"></ion-icon></Link></li>
        <li><Link className='navbarItem' to="/cv" title='CV'><ion-icon name="book-outline"></ion-icon></Link></li>
        <li><Link className='navbarItem' to="/actualites" title='Actualités'><ion-icon name="newspaper-outline"></ion-icon></Link></li>
        <li><Link className='navbarItem' to="/ecrire" title='Écrire'><ion-icon name="pencil-outline"></ion-icon></Link></li>
        <li><Link className='navbarItem' to="/faq" title='FAQ'><ion-icon name="help-outline"></ion-icon></Link></li>
         { 
        user ? (
         <Link to="/reglages" title='Profil'>
            
          <img className="navBarImg" src={PF + user.profilPP} alt="profilPP" />
          </Link>
        ) : (
          <ul className='connexion'>
            
            <li><Link to="/connexion" >CONNEXION</Link></li>
            <li><Link to="/senregistrer">S'ENREGISTRER</Link></li>
          </ul>
        )
      }
      </ul>
     
      </div>
    
  )
}

export default Navbar