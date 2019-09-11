import styled from 'styled-components'

export const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  padding: 5px 30px;
  box-shadow: 0 1px 2px rgba(74, 74, 74, 0.1);
`

export const Logo = styled.h1`
  font-size: 3rem;
  font-family: var(--pacifico);

  a {
    text-decoration: none;
    color: var(--dark-grey);
    transition: 0.2s all ease;

    &:hover {
      color: var(--silver);
    }
  }
`

export const Wrap = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
