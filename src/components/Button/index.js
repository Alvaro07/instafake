import React from 'react'
import { ButtonTag } from './styles'

export const Button = props => {
  return (
    <ButtonTag {...props} onClick={props.onClick}>
      {props.text}
    </ButtonTag>
  )
}
