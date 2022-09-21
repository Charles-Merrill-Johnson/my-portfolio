import './index.scss'
import myLogo from '../../assests/images/myLogo.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <link className="logo" to="/">
        <img src={myLogo} alt="logo" />
      </link>
    </div>
  )
}

export default Sidebar
