import React from 'react'
import { Link } from '@reach/router'
import { HeaderWrap, Logo } from './styles'

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo>
        <Link to="/">Instafake</Link>
      </Logo>
    </HeaderWrap>
  )
}
