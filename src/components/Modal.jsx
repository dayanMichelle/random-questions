
import useVideo from '../hooks/useVideo'
import styles from '../styles/Modal.module.css'

const Modal = () => {
    const { puntos, setPuntos,setFinalizado,setPreguntaActual } = useVideo()
    console.log(setPuntos)
  return (
    <div className={styles.modal}>
        <h1>¡Felicidades!</h1>
        <h3>Has finalizado con:</h3>
        <h5>{puntos}</h5>
        <p onClick={() =>{ 
            setPuntos(0)
            setFinalizado(false)
            }}>Volver al test</p>
    </div>
  )
}

export default Modal