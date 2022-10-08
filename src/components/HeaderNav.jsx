import { Link, Outlet } from 'react-router-dom'
import '../assets/HeaderNav.css'
import logo from '../assets/img/logo.svg'

const HeaderNav = ({ active }) => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <div>
          <Link to="/" className={active === 'home' ? 'active' : undefined}>
            Accueil
          </Link>
          <Link
            to="/about"
            className={active === 'about' ? 'active' : undefined}
          >
            À Propos
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default HeaderNav
