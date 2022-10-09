import '../assets/HeaderImg.css'

const HeaderImg = ({ background, alt, height = '223px', children }) => {
  return (
    <header style={{ height: height }} className="header-img">
      <img src={background} alt={alt} height={height} />
      {children && <p>{children}</p>}
    </header>
  )
}

export default HeaderImg
