import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

export default function useMenuCard() {
  const {addToCart, allProducts:products} = useContext(CartContext);

  function addProduct(id) {
    const product = products.find(product => product.id === id);
    addToCart(product)
  }

  return {
    addProduct
  };
}