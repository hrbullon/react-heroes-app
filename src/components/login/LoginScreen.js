import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/type'

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext)
  
  const handleClick = () => {

    const path = localStorage.getItem("lastPath") || "/";

    dispatch({
      type: types.login,
      payload: {
        name: "Haderson Bullón"
      }
    });

    navigate(path, { replace: true });

  }
  
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>
      <button 
        className='btn btn-primary'
        onClick={handleClick}>Login</button>
    </div>
  )
}
