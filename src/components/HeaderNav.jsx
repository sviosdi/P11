import { Link, Outlet } from 'react-router-dom'
import '../assets/HeaderNav.css'
import logo from '../assets/img/logo.svg'

const HeaderNav = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/about">À Propos</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default HeaderNav
