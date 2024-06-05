import './App.css'
import { useState } from 'react'
import Navbar from './components/nav'
import BookPage from './pages/books'
import EventPage from './pages/events'
import MenuPage from './pages/menu'
import HomePage from './pages/home'
import ProfilePage from './pages/profile'
import ContactPage from './pages/contact'
import ProductPage from './pages/productPage'
import Footer from './components/footer'
import Login from './pages/login'
import OrderMenu from './components/orderMenu'

import { CartProvider } from './context/cartContext'
import { SessionProvider } from './context/sessionContext'
// import LoadingPage from './pages/loading'
import Checkout from './pages/checkOut'
import { ErrorProvider } from './context/errorContext'


function App() {
  const [path, setPath] = useState(window.location.pathname)

  if(sessionStorage.getItem('sesion') !== false && sessionStorage.getItem('sesion') !== 'true') {
    sessionStorage.setItem('sesion', false)
    sessionStorage.setItem('user', JSON.stringify({}))
  }
  
  return (
    <>
      <ErrorProvider>
        <SessionProvider>
          <Navbar />
          <CartProvider>
            {/* <LoadingPage /> */}
            {path === '/' && <HomePage />}
            {path === '/profile' && <ProfilePage />}
            {path === '/menu' && <MenuPage />}
            {path === '/category' && <ProductPage />}
            {path === '/events' && <EventPage />}
            {path === '/contact' && <ContactPage />}
            {path === '/reserves' && <BookPage />}
            {path === '/login' && <Login />}
            {path === '/checkout' && <Checkout />}
            <OrderMenu />
          </CartProvider>
          <Footer />
        </SessionProvider>
      </ErrorProvider>
    </>
  )
}

export default App
