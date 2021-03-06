import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function Register() {
  const [pseudo, setPseudo] = useState("")
  const [email, setEmail] = useState("")
  const [mdp, setMdp] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("/auth/senregistrer",{
      pseudo,
      email,
      mdp,
    })
    res.data && window.location.replace("/connexion")
    } catch (err) {
      setError(true)
    }
    
    
  }
  return (
    <div className='register'>
      <h1>ENREGISTREMENT</h1>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
        <input type="text" placeholder='Pseudo' name="pseudo" autoFocus={true} autoComplete="off" 
        onChange={e => setPseudo(e.target.value)}/>
        <input type="text" placeholder='Adresse mail' name='email' autoFocus={true} autoComplete="off" 
        onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder='Mot de passe' name='mdp' autoFocus={true} autoComplete="off" 
        onChange={e => setMdp(e.target.value)}/>
        <div className="button">
        <button className="registerButton" type='submit'>S'ENREGISTRER</button>
        <button className="RegisterLoginButton" style={{marginBottom:"50px"}}><Link to="/connexion">CONNEXION</Link></button>
        </div>
        </form>
       
       {error && <span style={{color:"red", display:"flex", justifyContent:"center", marginTop:"20px", fontSize:"14px", fontWeight:"600"}}>Une erreur a été détectée.</span>}
    
    </div>
  )
}

export default Register