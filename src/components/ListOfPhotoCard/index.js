import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Container, List } from './styles'

export const ListOfPhotoCard = ({ photos = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) => {
  return (
    <Container>
      <List>
        {photos.map((data, i) => (
          <PhotoCard
            src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
            title="#hastag #hastag Etiam vel lacus a dui ornare fringilla nec eu nibh. Nullam eget porta orci. Nulla ullamcorper vehicula scelerisque."
            key={i}
          />
        ))}
      </List>
    </Container>
  )
}
