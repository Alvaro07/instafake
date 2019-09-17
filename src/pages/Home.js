import React, { Fragment } from 'react'
import { Header } from '../components/Header'
import { ListOfWallPhotos } from '../components/ListOfWallPhotos'

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <ListOfWallPhotos />
    </Fragment>
  )
}
