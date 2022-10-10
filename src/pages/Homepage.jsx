import HeaderNav from '../components/HeaderNav'
import HeaderImg from '../components/HeaderImg'
import Footer from '../components/Footer'
import bordMer from '../assets/img/header.webp'
import Thumb from '../components/Thumb'
import logements from '../data/logements.json'
import '../assets/Homepage.css'

export async function getLogement(id) {
  return logements.filter((l) => l.id === id)[0]
}

const Homepage = () => {
  return (
    <>
      <HeaderNav active="home" />
      <HeaderImg background={bordMer} alt="bord de mer"></HeaderImg>
      <main className="logements">
        {logements.map((l) => {
          return (
            <Thumb
              key={l.id}
              id={l.id}
              title={l.title}
              src={l.cover}
              alt={l.location}
            />
          )
        })}
      </main>
      <Footer />
    </>
  )
}

export default Homepage
