import './App.css'
import { useState } from 'react'
import Navbar from './components/nav'
import BookPage from './components/pages/books'
import EventPage from './components/pages/events'
import MenuPage from './components/pages/menu'
import HomePage from './components/pages/home'
import ProfilePage from './components/pages/profile'
import ContactPage from './components/pages/contact'
import ProductPage from './components/pages/productPage'
import Footer from './components/footer'
import Login from './components/pages/login'
import OrderMenu from './components/orderMenu'

import { CartProvider } from './context/cartContext'
import { SesionProvider } from './context/sesionContext'


function App() {
  const [path, setPath] = useState(window.location.pathname)

  sessionStorage.setItem('sesion', false)
  sessionStorage.setItem('user', {})
  
  return (
    <>
      <SesionProvider>
        <Navbar />
        <CartProvider>
          {path === '/' && <HomePage />}
          {path === '/profile' && <ProfilePage />}
          {path === '/menu' && <MenuPage />}
          {path === '/category' && <ProductPage />}
          {path === '/events' && <EventPage />}
          {path === '/contact' && <ContactPage />}
          {path === '/reserves' && <BookPage />}
          {path === '/login' && <Login />}
          <OrderMenu />
        </CartProvider>
        <Footer />
      </SesionProvider>
    </>
  )
}

export default App
