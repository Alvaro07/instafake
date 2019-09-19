import React from 'react'
import firebase from '../firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'

import { PhotoCard } from '../PhotoCard'
import { UploadPhotoButton } from '../UploadPhotoButton'
import { Container, List } from './styles'
import { Loader } from '../Loader'

export const ListOfProfilePhotos = props => {
  const [value, loading] = useDocumentData(firebase.db.collection('users').doc(props.profile))

  return (
    <Container>
      <UploadPhotoButton />
      <List>
        {loading && <Loader fullContainer fixed />}
        {value &&
          value.photos
            .reverse()
            .map((data, i) => <PhotoCard src={data.url} title={data.description} key={i} isProfile />)}
      </List>
    </Container>
  )
}
