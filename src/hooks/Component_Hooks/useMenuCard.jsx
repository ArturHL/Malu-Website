import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { products } from '../../api/fakeData';

export default function useMenuCard() {
  const {addToCart} = useContext(CartContext);

  function addProduct(id) {
    const product = products[id]
    addToCart(product)
  }

  return {
    addProduct
  };
}