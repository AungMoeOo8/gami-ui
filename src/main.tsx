import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const domNode = document.getElementById('root')
const root = createRoot(domNode as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)