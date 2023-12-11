import './index.css'

import { IoIosArrowUp } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import ProductCard from '../productCard';

function OrderMenu() {
  return (
    <>
      <section className='orderMenu'>
        <IoIosArrowUp />
        {/* Podemos hacer que la flecha sea parte de el subMenu y suba en conjunto */}
        <div>
          <div>
            <FaCartShopping />
            <p>MX$252.00</p>
          </div>
          <button className='buttonA'>Pagar</button>
        </div>
      </section>
      <section className='productsMenu'>
        <ProductCard title='Pozole Surtido' price='89' imageUrl='/receta-pozole-sin-carne.jpeg'/>  
        <ProductCard title='Pozole Surtido' price='89' imageUrl='/receta-pozole-sin-carne.jpeg'/>
        {/* Agregar un boton de eliminar todos */}
      </section>
    </>
  )
}

export default OrderMenu