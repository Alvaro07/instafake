import React, { Fragment, useContext } from 'react'
import { Header } from '../components/Header'
import { Context } from '../Context'
import firebase from '../components/firebase'

export const Home = () => {
  const { removeAuth } = useContext(Context)
  const signOut = () => {
    firebase.logout()
    removeAuth()
  }

  return (
    <Fragment>
      <Header />
      <h2>Home</h2>
      <button onClick={signOut}>Log out</button>
    </Fragment>
  )
}
