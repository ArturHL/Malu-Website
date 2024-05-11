import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { SessionContext } from './sessionContext';

export const CartContext = createContext();

export function CartProvider ({children}) {
  const [cart, setCart] = useState([])
  const loginRedirect = useContext(SessionContext);

  function addToCart(item) {
    loginRedirect();
    const index = findProductIndex(item.id)
    console.log(index, 'index');
    if(index >= 0) {
      const newCart = structuredClone(cart)
      newCart[index].quantity++
      setCart(newCart)
      return
    }
    setCart([...cart, item])
  }

  function removeFromCart(id) {
    if(cart.find(item => item.id === id).quantity > 1) {
      const newCart = structuredClone(cart)
      newCart[findProductIndex(id)].quantity--
      setCart(newCart)
      return
    }
    setCart(cart.filter(item => item.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  function findProductIndex(id) {
    return cart.findIndex(item => item.id === id)
  }

  function priceTotal() {
    let total = 0;
    cart.forEach(product => total += parseFloat(product.price * product.quantity));
    return total;
  }

  return(
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      priceTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}