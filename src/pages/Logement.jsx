import HeaderImg from '../components/HeaderImg'
import { useLoaderData } from 'react-router-dom'
import HeaderNav from '../components/HeaderNav'
import '../assets/Logement.css'
import Collapse from '../components/Collapse'
import Tag from '../components/Tag'

const Logement = () => {
  const logement = useLoaderData()

  let names = logement.host.name.split(' ')

  return (
    <>
      <HeaderNav />
      <HeaderImg
        background={logement.cover}
        alt={logement.title}
        height="415px"
      />
      <section className="global-description">
        <div className="logement">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className="tags">
            {logement.tags.map((tag) => {
              return <Tag>{tag}</Tag>
            })}
          </div>
        </div>
        <div className="right-data">
          <div className="owner">
            <h2>
              <div>{names[0]}</div>
              <div>{names[1]}</div>
            </h2>
            <img src={logement.host.picture} alt="host" />
          </div>
          <div className="stars"></div>
        </div>
      </section>
      <section className="precisions">
        <Collapse
          title="Description"
          text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
        />
        <Collapse
          title="Équipements"
          text={
            <ul>
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          }
        />
      </section>
    </>
  )
}

export default Logement
