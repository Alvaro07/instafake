import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { Context } from '../../Context'
import { FormWrap, Input, Title, Actions } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ title }) => {
  const { activateAuth } = useContext(Context)
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <FormWrap>
      <Title>{title}</Title>

      <Input type="text" placeholder="Email" {...email} />
      <Input type="password" placeholder="Password" {...password} />

      <Actions>
        {title === 'Login' ? (
          <Link to="/register">Register</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <button onClick={activateAuth}>Login</button>
      </Actions>
    </FormWrap>
  )
}
