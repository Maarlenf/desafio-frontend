import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './components/Form.jsx'
import { DataProvider } from './context/dataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </AuthProvider>
  </React.StrictMode>,
)
