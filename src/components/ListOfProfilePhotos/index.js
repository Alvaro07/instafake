import React, { useContext, useEffect, useState } from 'react'
import firebase from '../firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'

import { PhotoCard } from '../PhotoCard'
import { UploadPhotoButton } from '../UploadPhotoButton'
import { Container, List } from './styles'
import { Loader } from '../Loader'
import { Context } from '../../Context'

export const ListOfProfilePhotos = props => {
  const { user } = useContext(Context)
  const [isMyProfile, setIsMyProfile] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [value, loading] = useDocumentData(firebase.db.collection('users').doc(props.profile))

  useEffect(() => {
    if (user.name === props.profile) setIsMyProfile(true)
  }, [user.name, props.profile])

  const onDelete = photoData => {
    setDeleteLoading(true)
    firebase.deletePhoto(user.name, photoData.path, photoData.name).then(() => setDeleteLoading(false))
  }

  return (
    <Container>
      <UploadPhotoButton />
      <List>
        {loading && <Loader fullContainer fixed />}
        {deleteLoading && <Loader fullContainer fixed opacityBg />}
        {value &&
          value.photos
            .reverse()
            .map((data, i) => (
              <PhotoCard
                src={data.url}
                title={data.description}
                key={i}
                isProfile
                isMyProfile={isMyProfile}
                onDelete={() => onDelete(data)}
              />
            ))}
      </List>
    </Container>
  )
}
