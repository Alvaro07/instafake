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
  const [likeLoading, setLikeLoading] = useState(false)
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

  const handleLike = data => {
    setLikeLoading(true)
    firebase.likePhoto(data.user, data.timestamp, user.email).then(() => {
      firebase.getFeedPictures(user.email).then(data => {
        setPhotos(data)
        setLikeLoading(false)
      })
    })
  }

  return (
    <Container>
      <UploadPhotoButton />
      <List>
        {loading && <Loader fullContainer fixed />}
        {likeLoading && <Loader fullContainer fixed opacityBg />}
        {photos &&
          photos.map((data, i) => (
            <PhotoCard
              user={data.user}
              src={data.url}
              title={data.description}
              key={i}
              timestamp={data.timestamp}
              likes={data.likes.length}
              isLike={data.likes.includes(user.email) ? true : false}
              onLike={() => handleLike(data)}
            />
          ))}
      </List>
    </Container>
  )
}
