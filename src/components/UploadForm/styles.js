import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'

export const Form = styled.form`
  max-width: 450px;

  @media (min-width: ${mediaQueries.medium}) {
    padding: 30px;
    border: 1px dashed var(--grey);
    border-radius: 5px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 10px;
`

export const FormLine = styled.div`
  padding-top: 20px;
`

export const Label = styled.label`
  display: block;
  padding-bottom: 5px;
`

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 80px;
  padding: 12px 8px;
  border-radius: 3px;
  border: 1px solid var(--grey);
`

export const Error = styled.p`
  color: var(--wine);
`
