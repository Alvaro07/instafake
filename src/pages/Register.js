import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'

export const Register = () => {
  const { activateAuth } = useContext(Context)

  const onRegister = data => {
    console.log(data)
  }

  return <UserForm title="Register" onSubmit={data => onRegister(data)} />
}
