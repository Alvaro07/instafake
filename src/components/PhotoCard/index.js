import React from 'react'
import { ListCard, Image, Footer, LikesText, TitleText, Icons, IconLike, IconIsLiked, IconComment } from './styles'

export const PhotoCard = ({ id, src, likes = 0, title, isLike }) => {
  const Icon = isLike ? IconIsLiked : IconLike

  return (
    <ListCard>
      <Image src={src} alt={title} />
      <Footer>
        <Icons>
          <Icon size="24px" />
          <IconComment size="22px" />
        </Icons>
        <LikesText>{`${likes} like${likes > 1 || likes === 0 ? `s` : ``}`}</LikesText>
        <TitleText>{title}</TitleText>
      </Footer>
    </ListCard>
  )
}
