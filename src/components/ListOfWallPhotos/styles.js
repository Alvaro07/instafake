import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  max-width: 640px;
  width: 100%;
  padding: 20px;

  & > li:not(:last-child) {
    margin-bottom: 30px;
  }
`
export const NoPhotos = styled.div`
  padding: 15px 10px;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(74, 74, 74, 0.1);
  font-weight: 700;
  font-size: 14px;
`
