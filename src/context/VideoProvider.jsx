import axios from "axios";
import { createContext, useEffect, useState } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);

  function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
  }

  const siguientePregunta = (e) => {
    console.log("click");
    e.preventDefault();
    if (preguntaActual < Object.keys(preguntas).length - 1) {
      setPreguntaActual(preguntaActual + 1);
    }
    console.log(e)
  }
  useEffect(() => {
    const obtenerPreguntas = async () => {
      try {
        const url =
          "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
        const { data } = await axios.get(url);
        const { results } = await data;
        const objetoPregunta = results.map((pregunta) => {
          const respuest = {
            question: pregunta.question,
            answers: [
              {
                answer: pregunta.correct_answer,
                correct: true,
              },
              ...pregunta.incorrect_answers.map((answer) => ({
                answer,
                correct: false,
              })),
            ],
          };
          shuffleArray(respuest.answers);
          return respuest;
        });
        setPreguntas(objetoPregunta);
        console.log({ objetoPregunta });
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPreguntas();
  }, []);
  return (
    <VideoContext.Provider
      value={{
        preguntas,
        preguntaActual,
        siguientePregunta
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export { VideoContext };
export default VideoProvider;
