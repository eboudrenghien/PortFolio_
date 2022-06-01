import React from 'react'

function Register() {
  return (
    <div className='register'>
        <form action="" className="registerForm">
        <input type="text" placeholder='Pseudo' name="pseudo"/>
        <input type="text" placeholder='Adresse mail' name='email' />
        <input type="password" placeholder='Mot de passe' name='mdp' />
        </form>
    <div className="button">
        <button className="registerButton">S'ENREGISTRER</button>
        </div>
    </div>
  )
}

export default Register