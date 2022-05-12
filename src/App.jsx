import { Fragment } from "react";
import BarraPreguntas from "./components/BarraPreguntas";
import Modal from "./components/Modal";
import Pregunta from "./components/Pregunta";
import PreguntaActual from "./components/PreguntaActual";
import useVideo from "./hooks/useVideo";
import "./index.css";

function App() {
  const { finalizado } = useVideo();
  return (
    <>
      <div className="contenedor">
        <BarraPreguntas />
        <PreguntaActual />
        <Pregunta />
      </div>
      <Modal />
    </>
  );
}

export default App;
