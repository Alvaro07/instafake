import React, { useContext, useState } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import firebase from '../components/firebase'

export const Register = () => {
  const { activateAuth } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onRegister = data => {
    setLoading(true)
    firebase
      .register(data.email, data.password)
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
      title="Register"
      subTitle="Enter your email & Password and register now"
      onSubmit={data => onRegister(data)}
      error={error}
    />
  )
}
