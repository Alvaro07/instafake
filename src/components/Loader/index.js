import React from 'react'
import { Wrap, LoaderAnimated } from './styles'

export const Loader = props => {
  return (
    <Wrap {...props}>
      <LoaderAnimated></LoaderAnimated>
    </Wrap>
  )
}
