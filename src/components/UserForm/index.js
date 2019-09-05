import React from 'react'
import { Link } from '@reach/router'
import { FormWrap, Input, Title, SubTitle, Actions, Loading, ErrorMessage } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { Button } from '../Button'

export const UserForm = ({ title, subTitle, onSubmit, isLoading, error }) => {
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
      <SubTitle>{subTitle}</SubTitle>

      <Input type="text" placeholder="Email" {...email} />
      <Input type="password" placeholder="Password" {...password} />

      {title === 'Login' ? (
        <Actions>
          <Link to="/register">Register</Link>
          <Button text="Sign up" />
        </Actions>
      ) : (
        <Actions>
          <Link to="/login">Sign up</Link>
          <Button secondary text="Register" />
        </Actions>
      )}

      {isLoading && <Loading>loading...</Loading>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormWrap>
  )
}
