import React, { useState, useContext } from 'react'
import { Context } from '../../Context'
import firebase from '../firebase'
import { Button } from '../Button'
import { Loader } from '../Loader'
import { Form, Title, FormLine, Label, Textarea, Error } from '../Modal/styles'

export const UploadForm = ({ onUpdateWall }) => {
  const { user } = useContext(Context)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

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
      .then(() => {
        onUpdateWall()
      })
      .catch(error => console.error(error))
  }

  return (
    <Form onSubmit={handleSubmit}>
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

      {loading && <Loader fullContainer opacityBg fixed />}
    </Form>
  )
}
