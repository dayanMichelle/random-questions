import useVideo from "../hooks/useVideo";
import style from "../styles/Pregunta.module.css";
import Respuestas from "./Respuestas";

const Pregunta = () => {
  const { preguntas,preguntaActual,respuestas } = useVideo();
  console.log(respuestas)
  return (
    <>
      <aside>
        {Object.keys(preguntas).length !== 0 && <p>{preguntas[preguntaActual].question}</p>}
      </aside>
      <Respuestas preguntas={preguntas} preguntaActual={preguntaActual} />
      
    </>
  );
};

export default Pregunta;
