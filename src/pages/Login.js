import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { Link } from '@reach/router'

export const Login = () => {
  const { activateAuth } = useContext(Context)

  return <Fragment>
    <h2>Login</h2>
    <button onClick={activateAuth}>login</button>
    <Link to='/register' >Regsiter</Link>
  </Fragment>
}
