import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './pages/App'
import Task from './pages/Task'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='user/:userId' element={<Task />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
