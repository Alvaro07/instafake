import React from 'react'
import { StyledLink, FormWrap, Logo, Input, Title, SubTitle, Actions, ErrorMessage } from './styles'
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
          <StyledLink to={`${process.env.PUBLIC_URL}/register`}>Register</StyledLink>
          <Button text="Sign up" />
        </Actions>
      ) : (
        <Actions>
          <StyledLink to={`${process.env.PUBLIC_URL}/login`}>Sign up</StyledLink>
          <Button secondary text="Register and sign up" />
        </Actions>
      )}

      {isLoading && <Loader fullContainer opacityBg />}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormWrap>
  )
}
