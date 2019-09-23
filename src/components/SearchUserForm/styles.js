import styled from 'styled-components'

export const Results = styled.ul`
  /* height: 300px; */
  max-height: 300px;
  overflow-x: auto;
`

export const User = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--grey);
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  h4 {
    flex: 1;
  }
`
export const ImageProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: var(--light-grey);
  padding: 5px;
  border-radius: 50%;
  margin-right: 10px;
`

export const FollowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  padding: 7px 10px;

  border: 1px solid var(--grey);
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    background-color: var(--light-grey);
  }
`
