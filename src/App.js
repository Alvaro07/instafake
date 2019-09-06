import React, { Fragment, useEffect, useContext } from 'react'
import { GlobalStyle, ResetStyle } from './styles/GlobalStyles'
import { Context } from './Context'
import { Router, Redirect, Location } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import firebase from './components/firebase'

function App() {
  const { activateAuth } = useContext(Context)

  useEffect(() => {
    firebase
      .getUser()
      .then(data => {
        if (data) activateAuth()
      })
      .catch(error => console.log(error))
  }, [activateAuth])

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
                  <Router>
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
