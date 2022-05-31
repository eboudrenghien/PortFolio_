import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
        <form action="" className="loginForm">
        <input type="text" placeholder='Adresse mail' />
        <input type="password" placeholder='Mot de passe' />
        </form>
    <div className="button">
        <button className="loginButton"><Link to="/reglages">CONNEXION</Link></button>
        <button className="loginRegisterButton"><Link to="/senregistrer">S'ENREGISTRER</Link></button>
        </div>
    </div>
  )
}

export default Login