import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cartContext';
import useAnimateOrder from '../../hooks/useAnimateOrder';

export default function useOrderMenu() {
  const {translate, rotateIcon} = useAnimateOrder(false);
  const {cart, clearCart, priceTotal} = useContext(CartContext);

  function payCart (cart) {
    console.log(cart);
  }
  return {
    translate,
    rotateIcon,
    cart,
    clearCart,
    priceTotal,
    payCart
  }
}