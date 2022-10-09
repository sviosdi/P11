import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Logement from './pages/Logement'
import { getLogement } from './pages/Homepage'
//import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/:logementId',
    loader: ({ params }) => {
      return getLogement(params.logementId)
    },
    element: <Logement />,
    errorElement: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
