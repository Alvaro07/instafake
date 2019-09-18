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
  Header
} from './styles'
import { MdPerson } from 'react-icons/md'

export const PhotoCard = ({ user, src, likes = 0, title, isProfile, isLike, timestamp, onLike }) => {
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
              <h4>{user}</h4>
            </Header>
          )}
          <Image src={src} alt={title} />
          <Footer>
            <Icons>
              <IconHeart size="24px" onClick={onLike} />
              <IconComment size="22px" />
            </Icons>
            <LikesText>{`${likes} like${likes > 1 || likes === 0 ? `s` : ``}`}</LikesText>
            <TitleText>
              {user && <span>{user}</span>} {title}
            </TitleText>
          </Footer>
        </Fragment>
      )}
    </ListCard>
  )
}
