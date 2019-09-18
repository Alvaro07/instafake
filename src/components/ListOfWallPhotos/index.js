import React, { useContext, useEffect, useState } from 'react'
import firebase from '../firebase'
import { Context } from '../../Context'

import { PhotoCard } from '../PhotoCard'
import { UploadPhotoButton } from '../UploadPhotoButton'
import { Container, List } from './styles'
import { Loader } from '../Loader'

export const ListOfWallPhotos = () => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setLoading(true)

    firebase.getFeedPictures(user.email).then(data => {
      setPhotos(data)
      setLoading(false)
    })

    return () => {
      firebase.getFeedPictures(user.email)
    }
  }, [user])

  return (
    <Container>
      <UploadPhotoButton />
      <List>
        {loading && <Loader fullContainer fixed />}
        {photos &&
          photos.map((data, i) => <PhotoCard user={data.user} src={data.url} title={data.description} key={i} />)}
      </List>
    </Container>
  )
}
