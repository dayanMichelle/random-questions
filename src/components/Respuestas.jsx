import styles from "../styles/Preguntas.module.css";
const Respuestas = ({ preguntas, preguntaActual }) => {
  return (
    <main>
      {Object.keys(preguntas).length !== 0 &&
        preguntas[preguntaActual].answers.map((answer) => (
          <div className={styles.radio}>
            <input
              type="radio"
              id={answer.answer}
              name={answer.answer}
              value={answer.answer}
            />
            <label htmlFor={answer.answer}>{answer.answer}</label>
          </div>
        ))}
    </main>
  );
};

export default Respuestas;
