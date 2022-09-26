import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assests/images/mylogo.png'
import SubLogo from '../../assests/images/sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false)

  const ToggleSideBar = () => {
    openNav === true ? setOpenNav(false) : setOpenNav(true)
  }

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-container">
            <a href="/" className="site-logo">
              Company Logo
            </a>
            <div className="navbar-form">
              <div className="navbar-btn" onClick={ToggleSideBar}>
                <FontAwesomeIcon icon={faBarsStaggered} />
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${openNav === true ? 'active' : ''}`}>
          <div className="sidebar-header">
            <h4>Sidebar Header</h4>
            <div className="navbar-button" onClick={ToggleSideBar}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="sb-link">HOME</li>
              <li className="sb-link">ABOUT</li>
              <li className="sb-link">CODE</li>
              <li className="sb-link">FILES</li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${openNav === true ? 'active' : ''}`}
          onClick={ToggleSideBar}
        ></div>
      </div>
    </>
  )
}

export default Sidebar
