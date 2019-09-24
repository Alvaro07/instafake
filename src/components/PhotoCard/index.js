import React, { useState, useEffect, useRef, Fragment } from 'react'
import {
  ListCard,
  Image,
  Footer,
  LikesText,
  TitleText,
  Icons,
  IconLike,
  IconIsLiked,
  IconComment,
  DeleteIcon,
  Header
} from './styles'
import { StyledLink } from '../../styles/GlobalStyles'
import { MdPerson } from 'react-icons/md'

export const PhotoCard = ({ userName, src, likes = 0, title, isProfile, isMyProfile, isLike, onLike, onDelete }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  const IconHeart = isLike ? IconIsLiked : IconLike

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return (
    <ListCard ref={element}>
      {show && (
        <Fragment>
          {!isProfile && (
            <Header>
              <MdPerson />
              <h4>
                <StyledLink to={`${process.env.PUBLIC_URL}/profile/${userName}`}>{userName}</StyledLink>
              </h4>
            </Header>
          )}

          <Image src={src} alt={title} />
          {isMyProfile && <DeleteIcon size="10px" onClick={onDelete} />}
          <Footer>
            {!isProfile && (
              <Icons>
                <IconHeart size="24px" onClick={onLike} />
                <IconComment size="22px" />
              </Icons>
            )}
            <LikesText>{`${likes} like${likes > 1 || likes === 0 ? `s` : ``}`}</LikesText>
            <TitleText>
              {userName && <span>{userName}</span>} {title}
            </TitleText>
          </Footer>
        </Fragment>
      )}
    </ListCard>
  )
}
