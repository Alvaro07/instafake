import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px;
  z-index: 10;
`

export const CloseButton = styled.button`
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 10px;

  background: none;
  border: none;
  padding: 0;

  font-size: 60px;
  font-family: var(--open-sans);
  font-weight: 300;
  line-height: 0.8;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    color: var(--wine);
  }
`

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
