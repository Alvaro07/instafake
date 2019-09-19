import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { FaRegComment } from 'react-icons/fa'
import { fadeIn } from '../../styles/animation'

/**
 * General container
 */

export const ListCard = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(74, 74, 74, 0.1);
  min-height: 200px;
`

/**
 * header
 */

export const Header = styled.header`
  display: flex;
  align-items: center;

  padding: 10px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  svg {
    background-color: var(--light-grey);
    padding: 5px;
    border-radius: 50%;
    font-size: 24px;
    margin-right: 10px;
  }

  h4 {
    font-weight: 700;
    font-size: 14px;
    font-family: var(--roboto);
  }
`

export const Image = styled.img`
  ${fadeIn()}
  max-width: 100%;
  width: 100%;
  display: block;

  max-height: 320px;
  object-fit: cover;

  @media (min-width: ${mediaQueries.medium}) {
    height: 200px;
  }
`

export const Footer = styled.div`
  padding: 10px 15px 20px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  flex: 1;
`

/**
 * Icons
 */

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
  cursor: pointer;
  color: var(--wine);
`

export const IconComment = styled(FaRegComment)`
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    color: var(--wine);
  }
`

/**
 * Footer
 */

export const LikesText = styled.p`
  font-weight: 700;
  font-family: var(--roboto);
  padding-bottom: 5px;
`

export const TitleText = styled.p`
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-family: var(--roboto);

  & > span {
    font-weight: 700;
  }
`
