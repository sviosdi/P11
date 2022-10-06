import '../assets/HeaderImg.css'

const HeaderImg = ({ background, alt, children }) => {
  return (
    <div className="header-img">
      <img src={background} alt={alt} />
      <p>{children}</p>
    </div>
  )
}

export default HeaderImg
