import '../assets/HeaderImg.css'

const HeaderImg = ({ background, alt }) => {
  return (
    <header className="header-img">
      <img src={background} alt={alt} />
    </header>
  )
}

export default HeaderImg
