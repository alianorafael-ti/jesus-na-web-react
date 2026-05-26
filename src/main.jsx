import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'

// 1. Importa o contador da Vercel
import { inject } from '@vercel/analytics';

// 2. Ativa o contador automaticamente no site
inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)