import './layout.scss'
import Sidebar from '../Sidebar/sidebar'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page"></div>
    </div>
  )
}

export default Layout
