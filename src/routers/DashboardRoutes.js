import React, { Fragment } from 'react'
import {  Outlet, useLocation } from 'react-router-dom'

import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {

  const location = useLocation()
  
  localStorage.setItem("lastPath", location.pathname);

  return (
    <Fragment>
        <Navbar/>
          <div className='container mt-2'>
          <Outlet/>
        </div>
    </Fragment>
  )
}
