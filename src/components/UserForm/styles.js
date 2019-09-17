import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledLink = styled(Link)`
  color: var(--dark-grey);
  font-weight: bold;
  transition: 0.3s all ease;

  &:hover {
    color: var(--dark-orange);
  }
`

export const FormWrap = styled.form`
  position: relative;
  display: block;
  width: 100%;
  max-width: 420px;
  position: relative;
  padding: 30px;
  background-color: white;
  border-radius: 5px;
`

export const Logo = styled.h1`
  font-size: 3.8rem;
  font-family: var(--pacifico);
  color: var(--dark-grey);
  line-height: 1;
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px dashed var(--grey);
`

export const Title = styled.h2`
  font-size: 20px;
  font-family: var(--roboto);
  font-weight: 900;
  margin-bottom: 10px;
`

export const SubTitle = styled.p`
  font-size: 14px;
  display: block;
  padding-bottom: 20px;
`

export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 12px 8px;
  border-radius: 3px;
  border: 1px solid var(--grey);

  &:focus {
    outline-color: var(--orange);
  }
`

export const Actions = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ErrorMessage = styled.p`
  padding-top: 15px;
  color: var(--wine);
  text-align: center;
`
