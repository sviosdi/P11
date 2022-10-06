import '../assets/Thumb.css'

const Thumb = ({ title, src, alt }) => {
  return (
    <div className="thumb">
      <img src={src} alt={alt} />
      <div className="thumb-title">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Thumb
