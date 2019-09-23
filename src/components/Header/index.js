import React, { useContext, Fragment, useState } from 'react'
import firebase from '../firebase'
import { Link } from '@reach/router'
import { Context } from '../../Context'
import { MdPersonAdd } from 'react-icons/md'

import { Modal } from '../Modal'
import { Button } from '../Button'
import { SearchUserForm } from '../SearchUserForm'

import { StickyHeader, Logo, Wrap, UserName } from './styles'
import { StyledLink } from '../../styles/GlobalStyles'

export const Header = () => {
  const { removeAuth, user } = useContext(Context)
  const [userModal, setUserModal] = useState(false)

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
          <Button
            icon={MdPersonAdd}
            iconSize="24px"
            secondary
            className="margin-right-10"
            onClick={() => setUserModal(true)}
          />
          <Button text="Log out" onClick={signOut} />
        </Fragment>
      </Wrap>

      {!userModal && (
        <Modal onClose={() => setUserModal(false)}>
          <SearchUserForm />
        </Modal>
      )}
    </StickyHeader>
  )
}
