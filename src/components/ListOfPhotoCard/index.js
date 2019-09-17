import React from 'react'
import firebase from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { PhotoCard } from '../PhotoCard'
import { UploadPhotoButton } from '../UploadPhotoButton'
import { Container, List } from './styles'
import { Loader } from '../Loader'

export const ListOfPhotoCard = () => {
  const [value, loading] = useCollectionData(firebase.db.collection('users'))

  return (
    <Container>
      <UploadPhotoButton />
      <List>
        {loading && <Loader />}
        {value &&
          value[0].photos
            .reverse()
            .map((data, i) => <PhotoCard src={data.url} title={data.description} key={i} />)}
      </List>
    </Container>
  )
}
