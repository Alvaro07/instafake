import React, { Fragment } from 'react'
import { PhotoButton } from './styles'
import { MdPhotoCamera } from 'react-icons/md'

export const UploadPhoto = () => {
  return (
    <Fragment>
      <PhotoButton icon={MdPhotoCamera} iconSize="30px" secondary />
    </Fragment>
  )
}
