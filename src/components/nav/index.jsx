import './index.css'
import { FaUser } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { PiPhoneFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import toggleMenu from "../../utils/toggleMenu";

function Navbar() {
  return (
    <>
      <nav className='nav'>
        <a href="/"><img src="/Logo 2017.png" alt="" className='logo'/></a>
        <div className='shopMenuSection'>
          <div className='btnMenuNav'>
            <input type="checkbox" id="checkbox2" className="checkbox2 visuallyHidden" onClick={toggleMenu}/>
            <label htmlFor="checkbox2">
              <div className="hamburger hamburger2">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
              </div>
            </label>
          </div>
        </div>
        <div className='menuDesktop'>
          <ul>
            <a href="/"><li>Home</li></a>
            {/* <a href="/profile"><li>Perfil</li></a> */}
            <a href="/menu"><li>Menu</li></a>
            {/* <a href="/reserves"><li>Reservas</li></a> */}
            <a href="/events"><li>Eventos</li></a>
            <a href="/contact"><li>Contactanos</li></a>
          </ul>
        </div>
      </nav>
      <menu className='dropDownMenu inactive'>
        <ul>
          <a href="/"><li><GoHomeFill />Home</li></a>
          {/* <a href="/profile"><li><FaUser />Perfil</li></a> */}
          <a href="/menu"><li><MdRestaurant />Menu</li></a>
          {/* <a href="/reserves"><li><FaBookBookmark/>Reservas</li></a> */}
          <a href="/events"><li><FaCalendarAlt/>Eventos</li></a>
          <a href="/contact"><li><PiPhoneFill/>Contactanos</li></a>
        </ul>
      </menu>
    </>
  )
}

export default Navbar