import React from 'react'
import { StyledLink, FormWrap, Logo, Input, Title, SubTitle, Actions, LoadingWrap, ErrorMessage } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { Button } from '../Button'
import { Loader } from '../Loader'

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
      <Logo>Instafake</Logo>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>

      <Input type="text" placeholder="Email" {...email} />
      <Input type="password" placeholder="Password" {...password} />

      {title === 'Login' ? (
        <Actions>
          <StyledLink to="/register">Register</StyledLink>
          <Button text="Sign up" />
        </Actions>
      ) : (
        <Actions>
          <StyledLink to="/login">Sign up</StyledLink>
          <Button secondary text="Register" />
        </Actions>
      )}

      {isLoading && (
        <LoadingWrap>
          <Loader />
        </LoadingWrap>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormWrap>
  )
}
