import styled, { css } from 'styled-components'

export const ButtonTag = styled.button`
  display: inline-block;
  width: ${props => (props.fullWidth ? '100%' : null)};
  padding: 10px 15px;

  font-size: 14px;
  font-weight: 700;
  color: white;

  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s all ease;
  background-color: var(--orange);

  &:hover {
    background-color: var(--silver);
  }

  /*
   * Secondary styles
   */

  ${props =>
    props.secondary &&
    css`
      background-color: var(--grey-dark);
      &:hover {
        background-color: var(--silver);
      }
    `}
`
