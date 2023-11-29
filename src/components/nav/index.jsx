import './index.css'

// import { MdOutlineShoppingBag } from "react-icons/md";
import { IoRemove } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuSoup } from "react-icons/lu";
import { FaBookBookmark } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  function toggleMenu() {
    const dropDownMenu = document.querySelector('.dropDownMenu');
    const menuItem1 = document.querySelector('.menuItem1');
    const menuItem2 = document.querySelector('.menuItem2');
    const menuItem3 = document.querySelector('.menuItem3');
    // const menuButton = document.querySelectorAll('.btnMenuNav');
    // menuButton.classList.toggle('fixed');
    menuItem1.classList.toggle('rotate45');
    menuItem2.classList.toggle('inactive');
    menuItem3.classList.toggle('rotate-45');
    if (dropDownMenu.classList.contains('inactive')) {
      dropDownMenu.classList.remove('unDrop');
      dropDownMenu.classList.remove('inactive');
      setTimeout(() => {
        dropDownMenu.classList.add('drop');
      }, 1);
    } else {
      dropDownMenu.classList.add('unDrop');
      setTimeout(() => {
        dropDownMenu.classList.remove('drop');
        dropDownMenu.classList.add('inactive');
      }, 510);
    }
  }
  return (
    <>
      <nav className='nav'>
        <img src="/src/assets/Logo 2017.png" alt="" />
        <div className='shopMenuSection'>
          {/* <MdOutlineShoppingBag /> */}
          <div className='btnMenuNav' onClick={toggleMenu}>
            <IoRemove className='menuItem menuItem1'/>
            <IoRemove className='menuItem menuItem2'/>
            <IoRemove className='menuItem menuItem3'/>
          </div>
        </div>
      </nav>
      <menu className='dropDownMenu inactive'>
        <ul>
          <li><FaRegUser/>Perfil</li>
          <li><LuSoup/>Menu</li>
          <li><FaMotorcycle/>Domicilio</li>
          <li><FaBookBookmark/>Reservas</li>
          <li><PiPhoneFill/>Contactanos</li>
          <li><IoLocationSharp/>Ubicaciones</li>
          <li><FaCalendarAlt/>Eventos</li>
        </ul>
      </menu>
    </>
  )
}
export default Navbar

// MenuSection
// - Profile
// - Menu
// - Delivery
// - Book a table
// - Contact
// - Location
// - Events