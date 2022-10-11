import starOn from '../assets/img/star-on.svg'
import starOff from '../assets/img/star-off.svg'

const Star = ({ on }) => {
  let src = on ? starOn : starOff
  return <img className="star" src={src} alt="star" />
}

export default Star
