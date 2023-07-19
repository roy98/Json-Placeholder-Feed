import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import PostDetail from './routes/PostDetails'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/post/:id',
    element: <PostDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
