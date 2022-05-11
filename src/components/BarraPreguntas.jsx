import useVideo from "../hooks/useVideo"
import styles from "../styles/BarraPreguntas.module.css"
const BarraPreguntas = () => {
    const l = [1,2,3,4,5,6,7,8,9,10]
    const {preguntaActual} = useVideo()
  return (
    <div className={styles.contenedorBarra}>
        {l.map(i => (
            <div className={styles.barra}></div>
        ))}
    </div>
  )
}

export default BarraPreguntas