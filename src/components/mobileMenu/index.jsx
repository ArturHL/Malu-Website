import './index.css'

import { FaRegUser } from "react-icons/fa";
import { LuSoup } from "react-icons/lu";
import { FaBookBookmark } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa";

function MobileMenu() {
  window.addEventListener('scroll', function() {
    const mobileMenu = document.querySelector('.mobileMenu');
    if (window.scrollY > 0) {
      mobileMenu.classList.add('blackBackground');
    } else {
      mobileMenu.classList.remove('blackBackground');
    }
  });
  return (
    <>
      <section className='mobileMenu'>
        <div className='navOption'>
          <FaRegUser />
          <p>Perfil</p>
        </div>
        <div className='navOption'>
          <LuSoup />
          <p>Menu</p>
        </div>
        <div className='navOption'>
          <FaBookBookmark />
          <p>Agendar</p>
        </div>
        <div className='navOption'>
          <FaMotorcycle />
          <p>Ordenar</p>
        </div>
      </section>
    </>
  )
}

export default MobileMenu