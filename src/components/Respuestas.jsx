import useVideo from "../hooks/useVideo";
import styles from "../styles/Respuestas.module.css";
const Respuestas = ({ preguntas, preguntaActual }) => {
  const {siguientePregunta} = useVideo()
  return (
    <form>
      {Object.keys(preguntas).length !== 0 &&
        preguntas[preguntaActual].answers.map((answer) => (
          <div className={styles.radio}
          key={answer.answer}
          >
            <input

              type="radio"
              id={answer.answer}
              name={answer.answer}
              value={answer.answer}
              onClick={siguientePregunta}
            />
            <label htmlFor={answer.answer}>{answer.answer}</label>
          </div>
        ))}
    </form>
  );
};

export default Respuestas;
