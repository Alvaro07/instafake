import React, { useContext, useEffect, useState } from 'react'
import firebase from '../firebase'
import { Context } from '../../Context'

import { PhotoCard } from '../PhotoCard'
import { UploadPhotoButton } from '../UploadPhotoButton'
import { Container, List } from './styles'
import { Loader } from '../Loader'
import { Button } from '../Button'

export const ListOfWallPhotos = () => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [otherLoading, setOtherLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [photoNumber, setPhotoNumber] = useState(10)

  useEffect(() => {
    if (!user) return
    setLoading(true)
    firebase.getFeedPictures(user.name).then(data => {
      setPhotos(data.slice(0, photoNumber))
      setLoading(false)
    })
  }, [user, photoNumber])

  const handleLike = data => {
    setOtherLoading(true)
    firebase.likePhoto(data.user, data.timestamp, user.name).then(() => {
      firebase.getFeedPictures(user.name).then(data => {
        setPhotos(data.slice(0, photoNumber))
        setOtherLoading(false)
      })
    })
  }

  const getPhotos = () => {
    setOtherLoading(true)
    firebase.getFeedPictures(user.name).then(data => {
      setPhotos(data.slice(0, photoNumber))
      setOtherLoading(false)
    })
  }

  const getMorePhotos = number => {
    setPhotoNumber(number + 10)
  }

  const ButtonMore =
    photos.length % 10 === 0 ? (
      <Button text="more photos" onClick={() => getMorePhotos(photoNumber)} />
    ) : (
      <p>There are no more photos to show</p>
    )

  return (
    <Container>
      <UploadPhotoButton onFinish={getPhotos} />
      <List>
        {loading && <Loader fullContainer fixed opacityBg />}
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
        {!loading && ButtonMore}
      </List>
    </Container>
  )
}
