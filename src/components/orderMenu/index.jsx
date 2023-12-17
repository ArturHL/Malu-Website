import './index.css'
import { useState } from 'react';

import { IoIosArrowUp } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import ProductCard from '../productCard';

function OrderMenu() {
  const [menuActive, setMenuActive] = useState(false)
  function translate (){
    const isActive = menuActive
    const menu = document.querySelector('.productsMenu')
    const px = menu.getBoundingClientRect().height - 30
    if(isActive){
      menu.style.transform = `translateY(0px)`
      setMenuActive(false)
    } else {
      menu.style.transform = `translateY(-${px}px)`
      setMenuActive(true)
    }
  }
  function rotateIcon(){
    const isActive = menuActive
    const icon = document.querySelector('.iconDropMenu')
    if(isActive){
      icon.style.transform = `rotate(0deg)`
      setMenuActive(false)
    } else {
      icon.style.transform = `rotate(180deg)`
      setMenuActive(true)
    }
  }
  return (
    <>
      <section className='orderMenu'>
        <div>
          <div>
            <FaCartShopping />
            <p>MX$252.00</p>
          </div>
          <button className='buttonA'>Pagar</button>
        </div>
      </section>
      <section className='orderMenu2'>
        <section className='productsMenu'>
          <IoIosArrowUp onClick={()=>{translate(); rotateIcon()}} className='iconDropMenu'/>
          <ProductCard title='Pozole Surtido' price='89' imageUrl='/receta-pozole-sin-carne.jpeg'/>  
          <ProductCard title='Pozole Surtido' price='89' imageUrl='/receta-pozole-sin-carne.jpeg'/>
          <p className='goBack'><FaRegTrashAlt />Borrar Todos</p>
        </section>
      </section>
    </>
  )
}
export default OrderMenu