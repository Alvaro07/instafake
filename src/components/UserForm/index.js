import React from 'react'
import { Link } from '@reach/router'
import { FormWrap, Input, Title, Actions } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ title, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Title>{title}</Title>

      <Input type="text" placeholder="Email" {...email} />
      <Input type="password" placeholder="Password" {...password} />

      <Actions>
        {title === 'Login' ? (
          <Link to="/register">Register</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {/* <button onClick={activateAuth}>Login</button> */}
        <button type="submit">Login</button>
      </Actions>
    </FormWrap>
  )
}
