import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import axios from 'axios'
function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/connexion", {
        pseudo: userRef.current.value,
        mdp: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE", })
      console.log(err, "fail");
    }
  }
  return (
    <div className='login'>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <input type="text" placeholder='Pseudo' autoFocus={true} autoComplete="off" ref={userRef} />
        <input type="password" placeholder='Mot de passe' autoFocus={true} autoComplete="off" ref={passwordRef} />
        <button className="loginButton" type='submit' disabled={isFetching}>CONNEXION</button>
      </form>
      <div className="button">
        <button className="loginRegisterButton"><Link to="/senregistrer">S'ENREGISTRER</Link></button>
      </div>
    </div>
  )
}

export default Login