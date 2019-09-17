import React, { useContext } from 'react'
import firebase from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../../Context'

import { PhotoCard } from '../PhotoCard'
import { UploadPhotoButton } from '../UploadPhotoButton'
import { Container, List } from './styles'
import { Loader } from '../Loader'

export const ListOfProfilePhotos = () => {
  const { user } = useContext(Context)
  const [value, loading] = useCollectionData(firebase.db.collection('users').where('email', '==', user.email))

  return (
    <Container>
      <UploadPhotoButton />
      <List>
        {loading && <Loader fullContainer fixed />}
        {value &&
          value[0].photos.reverse().map((data, i) => <PhotoCard src={data.url} title={data.description} key={i} />)}
      </List>
    </Container>
  )
}
