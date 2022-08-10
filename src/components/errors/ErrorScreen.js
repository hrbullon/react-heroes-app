import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorScreen = ({ title }) => {
  
    return (
        <div className='container'>
            <div className='text-center mt-5 alert alert-warning'>
            { title } <br/>
            <Link to="/" className='btn btn-warning mt-2'>Volver al inicio</Link>
            </div>
        </div>
    )
}
