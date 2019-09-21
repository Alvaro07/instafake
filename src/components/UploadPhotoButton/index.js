import React, { Fragment, useState } from 'react'
import { PhotoButton } from './styles'
import { MdPhotoCamera } from 'react-icons/md'
import { UploadForm } from '../UploadForm'
import { Modal } from '../Modal'

export const UploadPhotoButton = ({ onFinish }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Fragment>
      <PhotoButton secondary round icon={MdPhotoCamera} iconSize="30px" onClick={() => setModalIsOpen(true)} />
      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <UploadForm onUpdateWall={onFinish} />
        </Modal>
      )}
    </Fragment>
  )
}
