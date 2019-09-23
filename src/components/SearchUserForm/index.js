import React, { useState } from 'react'
import firebase from '../firebase'
import { useInputValue } from '../../hooks/useInputValue'
import { useCollection } from 'react-firebase-hooks/firestore'

import { Loader } from '../Loader'
import { Form, Title, FormLine, Label, Error, Input } from '../Modal/styles'
import { Results, User, ImageProfile, FollowButton } from './styles'
import { MdPerson } from 'react-icons/md'
import { FaUserPlus, FaUserMinus } from 'react-icons/fa'

export const SearchUserForm = () => {
  const userSearch = useInputValue('')
  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState([])
  const [value, loading, error] = useCollection(firebase.db.collection('users'))

  const searchUser = () => {
    if (userSearch.value.length === 0) {
      setUsers([])
      return
    }

    const regex = new RegExp(`^${userSearch.value}`)
    let results = value.docs.filter(e => {
      return e.id.match(regex)
    })
    results = results.map(e => e.id)
    setUsers(results)
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
        {users.map((user, i) => {
          return (
            <User key={i}>
              {loading && <Loader />}
              <ImageProfile>
                <MdPerson size="18px" />
              </ImageProfile>
              <h4 className="bold">{user}</h4>
              <FollowButton>
                <FaUserPlus size="18px" />
              </FollowButton>
            </User>
          )
        })}
      </Results>
    </Form>
  )
}
