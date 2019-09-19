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

    firebase.userExists(data.userName).then(doc => {
      if (doc.exists) {
        setError('the user already exists')
        setLoading(false)
      } else {
        firebase
          .register(data.email, data.password, data.userName)
          .then(() => {
            setLoading(false)
            activateAuth()
          })
          .catch(error => {
            setLoading(false)
            setError(error.message)
          })
      }
    })
  }

  return (
    <UserForm
      isLoading={loading}
      title="Register"
      subTitle="Enter your email & Password, register now and enjoy fully instafake image platform"
      onSubmit={data => onRegister(data)}
      errorFirebase={error}
    />
  )
}
