import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'

export const Register = () => {
  const { activateAuth } = useContext(Context)

  const onRegister = data => {
    console.log(data)
  }

  return (
    <UserForm
      title="Register"
      subTitle="Enter your email & Password and register now"
      onSubmit={data => onRegister(data)}
    />
  )
}
