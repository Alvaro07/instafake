import React, { Fragment } from 'react'
import { Header } from '../components/Header'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <ListOfPhotoCard />
    </Fragment>
  )
}
