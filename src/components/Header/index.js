import React, { useContext, Fragment } from 'react'
import firebase from '../firebase'
import { Link } from '@reach/router'
import { Context } from '../../Context'
// import { MdPersonAdd } from 'react-icons/md'

import { StickyHeader, Logo, Wrap, UserName } from './styles'
import { Button } from '../Button'
import { StyledLink } from '../../styles/GlobalStyles'

export const Header = () => {
  const { removeAuth, user } = useContext(Context)

  const signOut = () => {
    firebase.logout()
    removeAuth()
  }

  return (
    <StickyHeader>
      <Wrap>
        <Logo>
          <Link to={`${process.env.PUBLIC_URL}/`} component={Logo}>
            Instafake
          </Link>
        </Logo>
        <Fragment>
          <UserName>
            <StyledLink to={`${process.env.PUBLIC_URL}/profile/${user.name}`}>
              {user.name ? user.name : user.email}
            </StyledLink>
          </UserName>
          {/* <Button icon={MdPersonAdd} secondary /> */}
          <Button text="Log out" onClick={signOut} />
        </Fragment>
      </Wrap>
    </StickyHeader>
  )
}
