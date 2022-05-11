import { Fragment } from "react";
import BarraPreguntas from "./components/BarraPreguntas";
import Modal from "./components/Modal";
import Pregunta from "./components/Pregunta";
import useVideo from "./hooks/useVideo";
import "./index.css";

function App() {
  const { finalizado } = useVideo();
  return (
    <div className="contenedor">
    
        {!finalizado ? (
          <>
            <BarraPreguntas />
            <Pregunta />
          </>
        ) : (
          <Modal />
        )}
    </div>
  );
}

export default App;
