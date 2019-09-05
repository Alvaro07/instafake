import styled from 'styled-components'

export const FormWrap = styled.form`
  display: block;
  width: 100%;
  position: relative;
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
`

export const Actions = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
`

export const ErrorMessage = styled.p`
  padding-top: 15px;
  color: var(--orange);
  text-align: center;
`
