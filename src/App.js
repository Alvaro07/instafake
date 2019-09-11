import React, { Fragment, useEffect, useContext, useState } from 'react'
import firebase from './components/firebase'
import { Context } from './Context'
import { Router, Redirect, Location } from '@reach/router'

import { GlobalStyle, ResetStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Loader } from './components/Loader'

function App() {
  const { activateAuth } = useContext(Context)
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

  if (initializing) {
    return (
      <Fragment>
        <ResetStyle />
        <GlobalStyle />
        <Loader />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <ResetStyle />
      <GlobalStyle />

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Home path="/" />
              <Redirect noThrow from="/*" to="/" />
            </Router>
          ) : (
            <Location>
              {({ location }) => (
                <Fragment>
                  <Router className="login-wrap">
                    <Login path="/login" />
                    <Register path="/register" />

                    {location.pathname !== '/register' && (
                      <Redirect noThrow from="/*" to="/login" />
                    )}
                  </Router>
                </Fragment>
              )}
            </Location>
          )
        }
      </Context.Consumer>
    </Fragment>
  )
}

export default App
