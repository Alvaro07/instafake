import styled from 'styled-components'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { FaRegComment } from 'react-icons/fa'
import { fadeIn } from '../../styles/animation'

export const ListCard = styled.li`
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(74, 74, 74, 0.1);
  min-height: 200px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const Image = styled.img`
  ${fadeIn()}
  max-width: 100%;
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const Footer = styled.div`
  padding: 10px 15px 20px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`

export const IconLike = styled(MdFavoriteBorder)`
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    color: var(--wine);
  }
`

export const IconIsLiked = styled(MdFavorite)`
  color: var(--wine);
`

export const IconComment = styled(FaRegComment)`
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    color: var(--wine);
  }
`

export const LikesText = styled.p`
  font-weight: 700;
  font-family: var(--roboto);
  padding-bottom: 5px;
`

export const TitleText = styled.p`
  font-family: var(--roboto);
`
