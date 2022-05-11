import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import VideoProvider from './context/VideoProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <VideoProvider>
  <App />
      </VideoProvider>
  
  </React.StrictMode>
)
