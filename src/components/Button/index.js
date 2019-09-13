import React from 'react'
import { ButtonTag } from './styles'

export const Button = props => {
  const Icon = props.icon ? props.icon : null

  return (
    <ButtonTag {...props} onClick={props.onClick}>
      {Icon && <Icon size={props.iconSize ? props.iconSize : '18px'} />}
      {props.text}
    </ButtonTag>
  )
}
