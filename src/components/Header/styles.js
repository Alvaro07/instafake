import styled from 'styled-components'

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

export const Logo = styled.h1`
  font-size: 3.8rem;
  font-family: var(--pacifico);

  a {
    text-decoration: none;
    color: var(--grey-dark);
    transition: 0.2s all ease;

    &:hover {
      color: var(--silver);
    }
  }
`
