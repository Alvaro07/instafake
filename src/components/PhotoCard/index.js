import React, { useState, useEffect, useRef, Fragment } from 'react'
import { ListCard, Image, Footer, LikesText, TitleText, Icons, IconLike, IconIsLiked, IconComment } from './styles'

export const PhotoCard = ({ id, src, likes = 0, title, isLike }) => {
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
          <Image src={src} alt={title} />
          <Footer>
            <Icons>
              <IconHeart size="24px" />
              <IconComment size="22px" />
            </Icons>
            <LikesText>{`${likes} like${likes > 1 || likes === 0 ? `s` : ``}`}</LikesText>
            <TitleText>{title}</TitleText>
          </Footer>
        </Fragment>
      )}
    </ListCard>
  )
}
