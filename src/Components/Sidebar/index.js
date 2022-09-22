import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assests/images/mylogo.png'
import SubLogo from '../../assests/images/sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faFile,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
      <img className="sub-logo" src={SubLogo} alt="sublogo" />
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
        className="mywork-link"
        to="/mywork"
      >
        <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="files-link"
        to="/files"
      >
        <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
