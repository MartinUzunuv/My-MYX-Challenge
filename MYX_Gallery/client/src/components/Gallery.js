import React from 'react'
import './Gallery.css'
import Upload from './Upload'
import Display from './Display'

const Gallery = () => {
  return (
    <div className='Gallery'>
        <Upload />
        <Display />
    </div>
  )
}

export default Gallery