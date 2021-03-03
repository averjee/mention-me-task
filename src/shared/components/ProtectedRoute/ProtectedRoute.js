import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom";

import { LoginContext } from '../../../context/LoginProvider'

/**
 * For routes we want to protect from unauthorised users
 * 'isLoggedIn' can become a prop if we want different types of state protections per route
 */
const ProtectedRoute = ({ Component }) => {
  const { isLoggedIn } = useContext(LoginContext)

  return (
    <Route 
      render={() => (
        isLoggedIn 
        ? <Component />
        : <Redirect to='/login' />
      )} 
    />
  )
}

export default ProtectedRoute

