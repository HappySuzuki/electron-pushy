import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Use contextBridge
window.electron.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log('message', message)
})
