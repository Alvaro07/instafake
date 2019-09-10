import React, { useContext } from 'react'
import firebase from '../firebase'
import { Link } from '@reach/router'
import { Context } from '../../Context'
import { StickyHeader, Logo, Wrap } from './styles'
import { Button } from '../Button'

export const Header = () => {
  const { removeAuth } = useContext(Context)

  const signOut = () => {
    firebase.logout()
    removeAuth()
  }

  return (
    <StickyHeader>
      <Wrap>
        <Logo>
          <Link to="/" component={Logo}>
            Instafake
          </Link>
        </Logo>
        <Button text="Log out" onClick={signOut} />
      </Wrap>
    </StickyHeader>
  )
}
