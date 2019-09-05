import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'

export const Login = () => {
  const { activateAuth } = useContext(Context)

  const onLogin = data => {
    console.log(data)
  }

  return (
    <UserForm
      title="Login"
      subTitle="Enter your email & Password and try our fully featured instafake image platform."
      onSubmit={data => onLogin(data)}
    />
  )
}
