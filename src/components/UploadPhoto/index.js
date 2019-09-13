import React, { Fragment, useState } from 'react'
import { PhotoButton } from './styles'
import { MdPhotoCamera } from 'react-icons/md'
import { ModalUpload } from '../ModalUpload'

export const UploadPhoto = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  return (
    <Fragment>
      <PhotoButton secondary round icon={MdPhotoCamera} iconSize="30px" onClick={() => setModalIsOpen(true)} />
      {modalIsOpen && <ModalUpload onClose={() => setModalIsOpen(false)}>Toma modal</ModalUpload>}
    </Fragment>
  )
}
