import React, { useContext, useState } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import firebase from '../components/firebase'

export const Login = () => {
  const { activateAuth } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onLogin = data => {
    setLoading(true)
    firebase
      .login(data.email, data.password)
      .then(() => {
        setLoading(false)
        activateAuth()
      })
      .catch(error => {
        setLoading(false)
        setError(error.message)
      })
  }

  return (
    <UserForm
      isLoading={loading}
      title="Login"
      subTitle="Enter your email & Password and try our fully featured instafake image platform."
      onSubmit={data => onLogin(data)}
      error={error}
    />
  )
}
