import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App, Login, Post, Task } from './pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login/>} />
          <Route path='user/:userId/tasks' element={<Task />} />
          <Route path='user/:userId/posts' element={<Post />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
