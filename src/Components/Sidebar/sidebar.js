import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assests/images/mylogo.png'
import SubLogo from '../../assests/images/sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { ReactDOM } from 'react-dom'

const Sidebar = () => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const ToggleSidebar = () => {
    toggleOpen === true ? setToggleOpen(false) : setToggleOpen(true)
  }

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={SubLogo} alt="sublogo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          HOME
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="mywork-link"
          to="/mywork"
        >
          CODE
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="files-link"
          to="/files"
        >
          FILES
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            className="anchor-icon"
            rel="noreferrer"
            href="https://www.linkedin.com/in/charles-merrill-johnson/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="e2dbd2" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="anchor-icon"
            rel="noreferrer"
            href="https://github.com/Charles-Merrill-Johnson"
          >
            <FontAwesomeIcon icon={faGithub} color="e2dbd2" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
