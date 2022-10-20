import { Link, useRouteError } from 'react-router-dom'
import HeaderNav from '../components/HeaderNav'
import '../assets/ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <HeaderNav />
      <div className="error404">
        <h1>{error.status}</h1>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
        <p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </p>
      </div>
    </>
  )
}
