import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { products } from '../../api/fakeData';

export default function useProductCard() {
  const {cart, addToCart, removeFromCart} = useContext(CartContext);

  function addProduct(id) {
    const product = products[id]
    addToCart(product)
  }

  function isInCart(id) {
    const product = cart.find((product) => product.id === id)
    return product ? true : false
  }

  function productQuantity(id) {
    const product = cart.find((product) => product.id === id)
    return product ? product.quantity : 0
  }

  function removeProduct(id) {
    removeFromCart(id)
  }

  return {
    addProduct,
    isInCart,
    productQuantity,
    removeProduct
  };
}