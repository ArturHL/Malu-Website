import './index.css'

// import { MdOutlineShoppingBag } from "react-icons/md";
// import { IoLocationSharp } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { PiPhoneFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

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
        <a href="/"><img src="/Logo 2017.png" alt="" className='logo'/></a>
        <div className='shopMenuSection'>
          {/* <MdOutlineShoppingBag /> */}
          <div className='btnMenuNav' onClick={toggleMenu}>
            <IoRemove className='menuItem menuItem1'/>
            <IoRemove className='menuItem menuItem2'/>
            <IoRemove className='menuItem menuItem3'/>
          </div>
        </div>
        <div className='menuDesktop'>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/profile"><li>Perfil</li></a>
            <a href="/menu"><li>Menu</li></a>
            <a href="/reserves"><li>Reservas</li></a>
            {/* <a href=""></a><li><IoLocationSharp/>Ubicaciones</li> */}
            <a href="/events"><li>Eventos</li></a>
            <a href="/contact"><li>Contactanos</li></a>
          </ul>
        </div>
      </nav>
      <menu className='dropDownMenu inactive'>
        <ul>
          <a href="/"><li><GoHomeFill />Home</li></a>
          <a href="/profile"><li><FaUser />Perfil</li></a>
          <a href="/menu"><li><MdRestaurant />Menu</li></a>
          <a href="/reserves"><li><FaBookBookmark/>Reservas</li></a>
          {/* <a href=""></a><li><IoLocationSharp/>Ubicaciones</li> */}
          <a href="/events"><li><FaCalendarAlt/>Eventos</li></a>
          <a href="/contact"><li><PiPhoneFill/>Contactanos</li></a>
        </ul>
      </menu>
    </>
  )
}

export default Navbar