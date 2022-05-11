import { Fragment } from "react";
import BarraPreguntas from "./components/BarraPreguntas";
import Pregunta from "./components/Pregunta";
import VideoProvider from "./context/VideoProvider";
import "./index.css";

function App() {
  return (
    <div className="contenedor">
      <VideoProvider>
        <BarraPreguntas />
        <Pregunta />
      </VideoProvider>
    </div>
  );
}

export default App;
