import React, { Fragment } from 'react'
import { GlobalStyle, PageFormWrap } from './styles/GlobalStyles'
import Context from './Context'
import { Router, Redirect, Location } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Header } from './components/Header'
import firebase from './components/firebase'

function App() {
  console.log(firebase)

  return (
    <Fragment>
      <GlobalStyle />
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Home path="/" />
              <Redirect noThrow from="/login" to="/" />
            </Router>
          ) : (
            <Location>
              {({ location }) => (
                <Fragment>
                  <Header />
                  <Router component={PageFormWrap}>
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
