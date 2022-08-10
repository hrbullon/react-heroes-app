import React, { Fragment } from 'react'
import {  Outlet } from 'react-router-dom'

import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <Fragment>
        <Navbar/>
          <div className='container mt-2'>
          <Outlet/>
        </div>
    </Fragment>
  )
}
