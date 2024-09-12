import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { files } from '../../assets/files.js'
import LogoS from '../../assets/images/ganesha.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBurger,
  faCircle,
  faClose,
  faDownload,
  faEnvelope,
  faHome,
  faMarsAndVenus,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useRef, useState } from 'react'
const Sidebar = () => {
  const [show, setShow] = useState(false)
  const toggleRef = useRef()
  const toggleSidebar = () => {
    setShow(!show)
    if (show) {
      toggleRef.current.style.display = 'none'
    } else {
      toggleRef.current.style.display = 'block'
    }
  }
  return (
    <>
      <button className="toggleButton" onClick={toggleSidebar}>
        {show ? 'Close' : 'Open'}
      </button>
      <div className="nav-bar" ref={toggleRef}>
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="sushant" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>

          <a href={files} download="Your_Resume_Name.pdf">
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sushant-mahadwad-67bb26220/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SUSHANT0002/"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/sushantmahadwad/"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Sidebar
