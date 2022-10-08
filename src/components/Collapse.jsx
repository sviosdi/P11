import '../assets/Collapse.css'
import chevronUp from '../assets/img/chevron-up.svg'
import chevronDown from '../assets/img/chevron-down.svg'
import { useState } from 'react'

const Collapse = ({ title, text }) => {
  const [collapsed, setCollapsed] = useState(true)

  let classCollapse = 'collapse' + (collapsed ? ' collapsed' : ' expanded')

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={classCollapse}>
      <div onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img
          className="chevron"
          src={collapsed ? chevronDown : chevronUp}
          alt="collapse or expand"
        ></img>
      </div>
      <div>{text}</div>
    </div>
  )
}

export default Collapse
