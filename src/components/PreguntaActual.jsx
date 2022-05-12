import useVideo from "../hooks/useVideo";
import styles from "../styles/PreguntasActual.module.css";

const PreguntaActual = () => {
  const { preguntaActual, preguntas } = useVideo();
  return (
    <div className={styles.questions}>
      <p>
        Question {preguntaActual + 1 } / {preguntas.length}
      </p>
    </div>
  );
};

export default PreguntaActual;
