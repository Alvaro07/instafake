import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'

export const Home = () => {
  const { removeAuth } = useContext(Context)

  return (
    <Fragment>
      <h2>Home</h2>
      <button onClick={removeAuth}>Log out</button>
    </Fragment>
  )
}
