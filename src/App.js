import React, { Fragment, useEffect, useContext, useState } from 'react'
import firebase from './components/firebase'
import { Context } from './Context'
import { Router, Redirect, Location } from '@reach/router'

import { GlobalStyle, ResetStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'
import { Loader } from './components/Loader'

function App() {
  const { activateAuth, isAuth } = useContext(Context)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    firebase
      .getUser()
      .then(data => {
        if (data) {
          activateAuth()
          setInitializing(false)
        }
      })
      .catch(() => {
        setInitializing(false)
      })
  }, [activateAuth])

  return (
    <Fragment>
      <ResetStyle />
      <GlobalStyle />

      {initializing ? (
        <Loader />
      ) : isAuth ? (
        <Router>
          <NotFound default />
          <Home path="/" />
          <Redirect noThrow from="/login" to="/" />
          <Redirect noThrow from="/register" to="/" />
        </Router>
      ) : (
        <Location>
          {({ location }) => (
            <Fragment>
              <Router className="login-wrap">
                <Login path="/login" />
                <Register path="/register" />

                {location.pathname !== '/register' && <Redirect noThrow from="/*" to="/login" />}
              </Router>
            </Fragment>
          )}
        </Location>
      )}
    </Fragment>
  )
}

export default App
