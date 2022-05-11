import React from 'react'
import useVideo from '../hooks/useVideo'

const Modal = () => {
    const { puntos } = useVideo()
  return (
    <div>
        <h1>{puntos}</h1>
    </div>
  )
}

export default Modal