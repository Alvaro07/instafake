import React from 'react'
import { ModalContent, CloseButton } from './styles'

export const Modal = ({ children, onClose }) => {
  return (
    <ModalContent>
      <CloseButton onClick={onClose}>x</CloseButton>
      {children}
    </ModalContent>
  )
}
