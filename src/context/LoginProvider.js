import React, { createContext, useState, useMemo } from 'react'
import accounts from '../pages/login/accounts.json'

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logIn = () => {
    setIsLoggedIn(true)
  }

  const logOut = () => {
    setIsLoggedIn(false)
  }

  // useMemo required so it remembers the output of the function which can then be used
  // to pass the value as a prop into LoginContext.Provider
  const getAccounts = useMemo(() => {
    return Object.fromEntries(accounts.map(item => [item.username, item.password]))
  })

  const value = { isLoggedIn, logIn, logOut, getAccounts }

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}


