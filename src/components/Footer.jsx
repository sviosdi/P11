import '../assets/Footer.css'
import logoFooter from '../assets/img/logo-footer.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo-footer" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
