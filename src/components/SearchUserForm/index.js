import React, { useState, useContext } from 'react'
import firebase from '../firebase'
import { Context } from '../../Context'
import { useInputValue } from '../../hooks/useInputValue'
import { useCollection, useDocumentData } from 'react-firebase-hooks/firestore'

import { Loader } from '../Loader'
import { Form, Title, FormLine, Label, Error, Input } from '../Modal/styles'
import { Results, User, ImageProfile, FollowButton, FollowIcon, UnFollowIcon } from './styles'
import { MdPerson } from 'react-icons/md'

export const SearchUserForm = () => {
  const userSearch = useInputValue('')
  const { user, addUser } = useContext(Context)
  const [users, setUsers] = useState([])
  const [value, loading, error] = useCollection(firebase.db.collection('users'))
  const [userValue] = useDocumentData(firebase.db.collection('users').doc(user.name))

  const searchUser = () => {
    if (userSearch.value.length === 0) {
      setUsers([])
      return
    }

    const regex = new RegExp(`^${userSearch.value}`)
    let results = value.docs.filter(e => {
      return e.id.match(regex)
    })
    results = results.map(e => e.id).filter(e => e !== user.name)
    setUsers(results)
  }

  const handleFollow = (e, userFollow) => {
    e.preventDefault()
    if (userValue.following.includes(userFollow)) {
      firebase.followUser(user.name, userFollow, false).then(followUsers => {
        addUser({ ...user, following: followUsers })
      })
    } else {
      firebase.followUser(user.name, userFollow, true).then(followUsers => {
        addUser({ ...user, following: followUsers })
      })
    }
  }

  return (
    <Form>
      <Title>Search an user:</Title>
      <p>Search by username and follow to see all your posts</p>
      <FormLine>
        <Label className="bold">User name:</Label>
        <Input value={userSearch} placeholder="user" onKeyUp={searchUser} {...userSearch} />
      </FormLine>
      <Results>
        {users.map((userName, i) => {
          return (
            <User key={i}>
              {loading && <Loader />}
              <ImageProfile>
                <MdPerson size="18px" />
              </ImageProfile>
              <h4 className="bold">{userName}</h4>
              <FollowButton onClick={e => handleFollow(e, userName)}>
                {userValue.following.includes(userName) ? <UnFollowIcon size="18px" /> : <FollowIcon size="18px" />}
              </FollowButton>
            </User>
          )
        })}
      </Results>
      <FormLine>
        <Error>{error}</Error>
      </FormLine>
    </Form>
  )
}
