import '../assets/Thumb.css'
import { Link } from 'react-router-dom'

const Thumb = ({ id, title, src, alt }) => {
  return (
    <Link to={`/${id}`} className="thumb">
      <img src={src} alt={alt} />
      <div className="thumb-title">
        <h2>{title}</h2>
      </div>
    </Link>
  )
}

export default Thumb
