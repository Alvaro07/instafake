import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'

export const Login = () => {
  const { activateAuth } = useContext(Context)

  const onLogin = data => {
    console.log(data)
  }

  return <UserForm title="Login" onSubmit={data => onLogin(data)} />
}
