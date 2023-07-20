import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import PostDetail from './routes/PostDetails'
import ErrorBoundary from './components/generic/ErrorBoundary'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/post/:id',
    element: <PostDetail />,
    errorElement: <ErrorBoundary />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
