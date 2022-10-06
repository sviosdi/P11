import HeaderNav from '../components/HeaderNav'
import HeaderImg from '../components/HeaderImg'
import bordMer from '../assets/img/header.webp'
import Thumb from '../components/Thumb'

import logements from '../data/logements.json'
import '../assets/Homepage.css'

const Homepage = () => {
  return (
    <>
      <HeaderNav />
      <HeaderImg background={bordMer} alt="bord de mer">
        Chez vous, partout et ailleurs
      </HeaderImg>
      <section className="logements">
        {logements.map((l) => (
          <Thumb key={l.id} title={l.title} src={l.cover} alt={l.location} />
        ))}
      </section>
    </>
  )
}

export default Homepage
