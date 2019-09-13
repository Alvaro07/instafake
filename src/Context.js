import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(false)

  const value = {
    isAuth,
    user,
    activateAuth: () => {
      setIsAuth(true)
    },
    removeAuth: () => {
      setIsAuth(false)
    },
    addUser: data => {
      setUser(data)
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}
