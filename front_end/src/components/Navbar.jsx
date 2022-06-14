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
        <li className='navbarItem' onClick={handleLogout}>{user && <ion-icon name="power-outline"></ion-icon>}</li>
        <li><Link className='navbarItem' to="/"><ion-icon name="home-outline"></ion-icon></Link></li>
        <li><Link className='navbarItem' to="/biographie"><ion-icon name="book-outline"></ion-icon></Link></li>
        <li><Link className='navbarItem' to="/actualites"><ion-icon name="newspaper-outline"></ion-icon></Link></li>
        <li><Link className='navbarItem' to="/ecrire"><ion-icon name="pencil-outline"></ion-icon></Link></li>
        <li><Link className='navbarItem' to="/faq"><ion-icon name="help-outline"></ion-icon></Link></li>
         { 
        user ? (
         <Link to="/reglages">
            
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