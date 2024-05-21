import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { SessionContext } from './sessionContext';
import useProduct from '../hooks/API_Hooks/useProduct';

export const CartContext = createContext();

export function CartProvider ({children}) {
  localStorage.getItem('cart') === null && localStorage.setItem('cart', JSON.stringify([]));

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [allProducts, setAllProducts] = useState([]);
  const { loginRedirect } = useContext(SessionContext);
  const { getProducts } = useProduct();
  const [displayModifyMenu, setDisplayModifyMenu] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const p = await getProducts();
      setAllProducts(p);
      console.log(p);
    }

    fetchData();
  }, []);

  // Cart functions

  function addToCart(item) {
    loginRedirect();
    const index = findProductIndex(item.id)
    if(index >= 0) {
      const newCart = structuredClone(cart);
      newCart[index].quantity++
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return
    }
    item.quantity = 1
    setCart([...cart, item])
    localStorage.setItem('cart', JSON.stringify([...cart, item]))
  }

  function addProductsToCart(products) {
    console.log(products);
    loginRedirect();
    const index = findProductIndex(products.id)
    console.log(index);
    console.log(products.id);
    if(index < 0) {
      console.log('asd');
      const newCart = [...cart, products];
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return
    } else {
      console.log('qwe');
      const newCart = structuredClone(cart).splice(index, 1, products);
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id))
    localStorage.setItem('cart', JSON.stringify(cart.filter(item => item.id !== id)))
  }

  function clearCart() {
    setCart([])
    localStorage.setItem('cart', JSON.stringify([]))
  }

  // Price functions
  
  function priceTotal() {
    let total = 0;
    cart.forEach(product => total += parseFloat(product.price * product.quantity));
    return total;
  }
  
  function shippingCost () {
    return 30;
  }
  
  function finalPrice () {
    return priceTotal() + shippingCost();
  }
  
  // Logic functions

  function findProductIndex(id) {
    return cart.findIndex(item => item.id === id)
  }

  return(
    <CartContext.Provider value={{
      cart,
      allProducts,
      addToCart,
      addProductsToCart,
      removeFromCart,
      clearCart,
      priceTotal,
      shippingCost,
      finalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}