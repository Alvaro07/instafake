import React, { useState, Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button } from '../Button'
import { Loader } from '../Loader'
import { FormWrap, Logo, Input, Title, SubTitle, Actions, ErrorMessage } from './styles'
import { StyledLink } from '../../styles/GlobalStyles'

export const UserForm = ({ title, subTitle, onSubmit, isLoading, errorFirebase }) => {
  const userName = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const [error, setError] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    if (!userName.value.length > 0) {
      setError('complete all the fields')
    } else {
      setError('')
      onSubmit({
        email: email.value,
        password: password.value,
        userName: userName.value
      })
    }
  }

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Logo>Instafake</Logo>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Input type="text" placeholder="User" {...userName} />

      {title === 'Login' ? (
        <Fragment>
          <Input type="password" placeholder="Password" {...password} />

          <Actions>
            <StyledLink to={`${process.env.PUBLIC_URL}/register`}>Register</StyledLink>
            <Button text="Sign up" />
          </Actions>
        </Fragment>
      ) : (
        <Fragment>
          <Input type="text" placeholder="Email" {...email} />
          <Input type="password" placeholder="Password" {...password} />

          <Actions>
            <StyledLink to={`${process.env.PUBLIC_URL}/login`}>Sign up</StyledLink>
            <Button secondary text="Register and sign up" />
          </Actions>
        </Fragment>
      )}

      {isLoading && <Loader fullContainer opacityBg />}

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {errorFirebase && <ErrorMessage>{errorFirebase}</ErrorMessage>}
    </FormWrap>
  )
}
