import React, { Fragment } from 'react'
import { Header } from '../components/Header'
import { ListOfProfilePhotos } from '../components/ListOfProfilePhotos'

export const Profile = props => {
  return (
    <Fragment>
      <Header />
      <ListOfProfilePhotos profile={props.profileName} />
    </Fragment>
  )
}
