import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import axios from 'axios'
function Login() {

  const pseudoRef = useRef()
  const mdpRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/connexion", {
        pseudo: pseudoRef.current.value,
        mdp: mdpRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE" })
    }
  }
  return (
    <div className='login'>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <input type="text" placeholder='Pseudo' name='pseudo' autoFocus={true} autoComplete="off" ref={pseudoRef} />
        <input type="password" placeholder='Mot de passe' name='mdp' autoFocus={true} autoComplete="off" ref={mdpRef} />
        <button className="loginButton" type='submit' disabled={isFetching}>CONNEXION</button>
      </form>
      <div className="button">
        <button className="loginRegisterButton"><Link to="/senregistrer">S'ENREGISTRER</Link></button>
      </div>
    </div>
  )
}

export default Login