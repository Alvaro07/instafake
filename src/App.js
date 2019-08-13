import React, { Fragment } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import Context from './Context'
import { Router, Redirect, Location } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App () {
  return (
    <Fragment>
      <GlobalStyle />
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth ? (
              <Router>
                <Home path='/' />
                <Redirect noThrow from='/login' to='/' />
              </Router>
            ) : (
              <Location>
                {({ location }) => (
                  <Router>
                    <Login path='/login' />
                    <Register path='/register' />

                    { location.pathname !== '/register' &&
                      <Redirect noThrow from='/*' to='/login' />
                    }

                  </Router>)}
              </Location>)
        }
      </Context.Consumer>
    </Fragment>
  )
}

export default App
