import Homepage from './pages/Homepage'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Logement from './pages/Logement'
import { getLogement } from './pages/Homepage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:logementId',
    loader: async ({ params }) => {
      const logement = await getLogement(params.logementId)
      if (!logement)
        throw new Response('page not found', {
          status: 404,
          statusText: 'Not Found',
        })
      return logement
    },
    element: <Logement />,
    errorElement: <ErrorPage />,
  },
])

export default router
