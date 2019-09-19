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
    firebase.userExists(data.userName).then(doc => {
      if (doc.exists) {
        firebase
          .login(doc.data().email, data.password)
          .then(() => {
            setLoading(false)
            activateAuth()
          })
          .catch(error => {
            setLoading(false)
            setError(error.message)
          })
      } else {
        setLoading(false)
        setError('The user not exists')
      }
    })
  }

  return (
    <UserForm
      isLoading={loading}
      title="Login"
      subTitle="Enter your email & Password and try our fully featured instafake image platform."
      onSubmit={data => onLogin(data)}
      errorFirebase={error}
    />
  )
}
