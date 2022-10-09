import React, { useState } from 'react'
import '../assets/Gallery.css'
import leftChevron from '../assets/img/chevron-vleft.svg'
import rightChevron from '../assets/img/chevron-vright.svg'

const Gallery = ({ pictures }) => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    const newCurrent = current === pictures.length - 1 ? 0 : current + 1
    setCurrent(newCurrent)
  }

  const previous = () => {
    const newCurrent = current === 0 ? pictures.length - 1 : current - 1
    setCurrent(newCurrent)
  }

  return (
    <div className="gallery">
      <div className="chevrons">
        <img
          className="chevron-left"
          onClick={previous}
          src={leftChevron}
          alt="chevron-left"
        />
        <img
          className="chevron-right"
          onClick={next}
          src={rightChevron}
          alt="chevron-rigth"
        />
      </div>
      <img className="photo" src={pictures[current]} alt="test" />
      <div className="compteur">
        {current + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Gallery
