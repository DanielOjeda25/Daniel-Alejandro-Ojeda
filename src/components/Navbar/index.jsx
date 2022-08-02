import './styles.css'
import { GiPortal } from "react-icons/gi"
function Navbar() {

  return (
    <header>
      <a href='/' className='logo' >
        <GiPortal className='Fa-portal' />
        <h5 className='text-logo'>Hello World!</h5>
      </a>
    </header>
  )
}

export default Navbar
