import React, { useState } from 'react'
import { ModalContent, CloseButton, Form, Title, FormLine, Label, Textarea } from './styles'
import { Button } from '../Button'

export const ModalUpload = ({ onClose }) => {
  const [data, setData] = useState({ description: '', image: '' })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <ModalContent onSubmit={handleSubmit}>
      <CloseButton onClick={onClose}>x</CloseButton>
      <Form>
        <Title>Upload your photo</Title>
        <p>Choose your photo and upload it to instafake to share it with your friends</p>
        <FormLine>
          <Label>Write a description</Label>
          <Textarea
            defaultValue={data.description}
            onChange={e => setData({ ...data, description: e.target.value })}
          ></Textarea>
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
