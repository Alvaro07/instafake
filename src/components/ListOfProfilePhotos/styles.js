import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'

export const Container = styled.main`
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  max-width: 1024px;
  width: 100%;
  padding: 20px;

  @media (min-width: ${mediaQueries.medium}) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${mediaQueries.large}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
