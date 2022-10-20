import { useLoaderData } from 'react-router-dom'
import HeaderNav from '../components/HeaderNav'
import '../assets/Logement.css'
import Collapse from '../components/Collapse'
import Tag from '../components/Tag'
import Star from '../components/Star'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const Logement = () => {
  const logement = useLoaderData()
  const names = logement.host.name.split(' ')
  const rating = Number.parseInt(logement.rating)
  const pictures = logement.pictures

  const Stars = () => {
    let stars = []
    for (let i = 0; i < rating; i++)
      stars.push(<Star key={'star_' + i} on={true} />)
    for (let i = rating; i < 5; i++)
      stars.push(<Star key={'star_' + i} on={false} />)
    return stars
  }

  return (
    <>
      <HeaderNav />
      <Gallery pictures={pictures} />
      <section className="global-description">
        <div className="logement">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className="tags">
            {logement.tags.map((tag, idx) => {
              return <Tag key={'tag_' + idx}>{tag}</Tag>
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
          <div className="stars">
            <Stars />
          </div>
        </div>
      </section>
      <section className="precisions">
        <Collapse title="Description" text={logement.description} />
        <Collapse
          title="Équipements"
          text={
            <ul className="equipments">
              {logement.equipments.map((e, idx) => (
                <li key={'equip_' + idx}>{e}</li>
              ))}
            </ul>
          }
        />
      </section>

      <Footer />
    </>
  )
}

export default Logement
