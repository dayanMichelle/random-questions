import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Modal from "../components/Modal";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [ puntos, setPuntos ] = useState(0);
  const [respuestasCorrecta, setRespuestasCorrecta] = useState([]);
  const [finalizado, setFinalizado] = useState(false);
  const [ modal, setModal ] = useState(false)




  function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
  }

  const siguientePregunta = (e) => {
    e.preventDefault();
    if (preguntaActual < Object.keys(preguntas).length - 1) {
      setPreguntaActual(preguntaActual + 1);
      setFinalizado(false);
      setModal(false);
    }else { 
      setFinalizado(true);
      setPreguntaActual(0);
      setModal(true)
    }
    const respuestaCorrecta = respuestasCorrecta[preguntaActual].correct_answer;
   if(respuestaCorrecta === e.target.value){
      setPuntos(puntos + 1);
   }
   console.log(puntos);
  }
  useEffect(() => {
    const obtenerPreguntas = async () => {
      
      try {
        const url =
          "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
        const { data } = await axios.get(url);
        const { results } = await data;
        setRespuestasCorrecta(results);
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
        siguientePregunta,
        puntos,
        finalizado,
        setPuntos,
        setFinalizado,
        setPreguntaActual,
        modal,
        setModal
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export { VideoContext };
export default VideoProvider;
