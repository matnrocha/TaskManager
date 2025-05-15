import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = ({allowedRoles}) => {
// TODO do some kind of restriction to routes
  return <Outlet />
}

export default PrivateRoute