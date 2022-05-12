
import useVideo from '../hooks/useVideo'
import styles from '../styles/Modal.module.css'
import win from '../img/win.png'
import { useState } from 'react'
import Spinner from './Spinner'

const Modal = () => {
    const { puntos, setPuntos,setFinalizado,setPreguntaActual ,modal,setModal} = useVideo()


  return (
 

      <div className={styles.modal} style={{display:  modal ? 'block' : 'none'}}>
        <p className={styles.cerrar} onClick={() =>{ 
            setPuntos(0)
            setFinalizado(false)
            setModal(false)
            }}>X</p>
        <h1>¡Felicidades!</h1>
        <h3>Has finalizado con:</h3>
        <h5>{puntos}</h5>
  
    </div>

   
    
  )
}

export default Modal