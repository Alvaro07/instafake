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
  const [otherLoading, setOtherLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    if (!user) return
    setLoading(true)
    firebase.getFeedPictures(user.name).then(data => {
      setPhotos(data)
      setLoading(false)
    })
  }, [user])

  const handleLike = data => {
    setOtherLoading(true)
    firebase.likePhoto(data.user, data.timestamp, user.name).then(() => {
      firebase.getFeedPictures(user.name).then(data => {
        setPhotos(data)
        setOtherLoading(false)
      })
    })
  }

  const getPhotos = () => {
    setOtherLoading(true)
    firebase.getFeedPictures(user.name).then(data => {
      setPhotos(data)
      setOtherLoading(false)
    })
  }

  return (
    <Container>
      <UploadPhotoButton onFinish={getPhotos} />
      <List>
        {loading && <Loader fullContainer fixed />}
        {otherLoading && <Loader fullContainer fixed opacityBg />}
        {photos &&
          photos.map((data, i) => (
            <PhotoCard
              userName={data.user}
              src={data.url}
              title={data.description}
              key={i}
              timestamp={data.timestamp}
              likes={data.likes.length}
              isLike={data.likes.includes(user.name) ? true : false}
              onLike={() => handleLike(data)}
            />
          ))}
      </List>
    </Container>
  )
}
