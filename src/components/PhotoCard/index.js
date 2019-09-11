import React from 'react'
import { ListCard, Image, Footer, LikesText, TitleText } from './styles'

export const PhotoCard = ({ id, src, likes = 0, title }) => {
  return (
    <ListCard>
      <Image src={src} alt={title} />
      <Footer>
        <LikesText>{`${likes} like${likes > 1 || likes === 0 ? `s` : ``}`}</LikesText>
        <TitleText>{title}</TitleText>
      </Footer>
    </ListCard>
  )
}
