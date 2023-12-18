import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export function CartProvider ({children}) {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    const index = findProductIndex(item.id)
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

  return(
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}