import { Fragment } from "react";
import Pregunta from "./components/Pregunta";
import VideoProvider from "./context/VideoProvider";
import "./index.css";

function App() {
  return (
    <div className="contenedor">
      <VideoProvider>
        <Pregunta />
      </VideoProvider>
    </div>
  );
}

export default App;
