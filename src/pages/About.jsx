import HeaderNav from '../components/HeaderNav'
import HeaderImg from '../components/HeaderImg'
import montagnes from '../assets/img/montagnes.webp'

const About = () => {
  return (
    <>
      <HeaderNav />
      <HeaderImg background={montagnes} alt="montagnes"></HeaderImg>
    </>
  )
}

export default About
