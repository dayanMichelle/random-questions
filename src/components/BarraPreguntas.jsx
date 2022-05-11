import useVideo from "../hooks/useVideo"
import styles from "../styles/BarraPreguntas.module.css"
const BarraPreguntas = () => {
    const {preguntaActual} = useVideo()
  return (
    <div className={styles.contenedorBarra}>
        {Array.from(Array(10), (i,x) => (
            <div style={{backgroundColor: x <= preguntaActual ? '#FFE59D' : '#ececec'}} className={styles.barra}></div>
        ))}
    </div>
  )
}

export default BarraPreguntas