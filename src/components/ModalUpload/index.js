import React from 'react'
import { ModalContent, CloseButton, Form, Title, FormLine, Label, Textarea } from './styles'
import { Button } from '../Button'

export const ModalUpload = ({ onClose }) => {
  return (
    <ModalContent>
      <CloseButton onClick={onClose}>x</CloseButton>
      <Form>
        <Title>Upload your image</Title>
        <p>Choose your photo and upload it to instafake to share it with your friends</p>
        <FormLine>
          <Label>Write a description</Label>
          <Textarea></Textarea>
        </FormLine>
        <FormLine>
          <Label>Your image:</Label>
          <input type="file" />
        </FormLine>
        <FormLine>
          <Button text="Upload image" secondary />
        </FormLine>
      </Form>
    </ModalContent>
  )
}
