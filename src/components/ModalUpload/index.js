import React, { useState, useContext } from 'react'
import { Context } from '../../Context'
import firebase from '../firebase'
import { ModalContent, CloseButton, Form, Title, FormLine, Label, Textarea, Error } from './styles'
import { Button } from '../Button'
import { Loader } from '../Loader'

export const ModalUpload = ({ onClose }) => {
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const { user } = useContext(Context)

  /**
   * On change in upload input
   */

  const handleUpload = e => {
    const file = e.target.files[0]

    if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
      const reader = new FileReader()
      reader.onloadend = e => setImage({ src: reader.result, file })
      reader.readAsDataURL(file)
      setError(false)
    } else {
      setError('Invalid file format')
    }
  }

  /**
   * On submit on button click
   */

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    firebase
      .uploadPhoto(image.file, description, user.name)
      .then(() => onClose())
      .catch(error => console.error(error))
  }

  return (
    <ModalContent onSubmit={handleSubmit}>
      <CloseButton onClick={onClose}>x</CloseButton>
      <Form>
        <Title>Upload your photo</Title>
        <p>Choose your photo and upload it to instafake to share it with your friends</p>

        <FormLine>
          <Label>Write a description</Label>
          <Textarea defaultValue={description} onChange={e => setDescription(e.target.value)}></Textarea>
        </FormLine>

        <FormLine>
          <Label>Your image:</Label>
          {image.src && <img src={image.src} alt={description} />}
          <input type="file" onChange={e => handleUpload(e)} accept="image/gif, image/jpeg, image/png" />

          {error && (
            <FormLine>
              <Error>{error}</Error>
            </FormLine>
          )}
        </FormLine>

        <FormLine>
          <Button text="Upload image" secondary disabled={description && image ? null : true} />
        </FormLine>

        {loading && <Loader fullContainer opacityBg />}
      </Form>
    </ModalContent>
  )
}
