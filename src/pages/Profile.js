import React, { Fragment } from 'react'
import { Header } from '../components/Header'
import { ListOfProfilePhotos } from '../components/ListOfProfilePhotos'

export const Profile = () => {
  return (
    <Fragment>
      <Header />
      <ListOfProfilePhotos />
    </Fragment>
  )
}
