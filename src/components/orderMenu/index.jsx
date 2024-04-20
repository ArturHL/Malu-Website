import './index.css'

import { IoIosArrowUp } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import ProductCard from '../productCard';
import useOrderMenu from '../../hooks/Component_Hooks/OrderMenu/useOrderMenu';
import { useEffect } from 'react';

function OrderMenu() {
  const {translate, rotateIcon, cart, clearCart, priceTotal, payCart} = useOrderMenu()

  useEffect(() => {translate('productsMenu', true); cart.length == 0 ? translate('productsMenu', false) : null}, [cart.length]);
  return (
    <>
      <section className='orderMenu' style={cart.length > 0 ? {display: 'block'} : {display: 'none'}}>
        <div>
          <div>
            <FaCartShopping />
            <p>MX${priceTotal()}</p>
          </div>
          <button className='buttonA' onClick={()=>{payCart(cart)}}>
            <a href="/checkout">Pagar</a>
          </button>
        </div>
      </section>
      <section className='orderMenu2' style={cart.length > 0 ? {display: 'block'} : {display: 'none'}}>
        <section className='productsMenu'>
          <IoIosArrowUp onClick={()=>{translate('productsMenu', false); rotateIcon('iconDropMenu')}} className='iconDropMenu'/>
          {
            cart.length > 0
              ? cart.map((product, index) => <ProductCard key={index} id={product.id} name={product.name} price={product.price} image={product.image}/>)
              : <p>No hay productos en tu carrito</p>
          }
          <p className='goBack' style={cart.length > 0 ? {display: 'flex'} : {display: 'none'}} onClick={clearCart}><FaRegTrashAlt />Borrar Todos</p>
        </section>
      </section>
    </>
  )
}
export default OrderMenu

// <ProductCard title='Pozole Surtido' price='89' imageUrl='/receta-pozole-sin-carne.jpeg'/>