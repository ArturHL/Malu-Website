import './App.css'
import Navbar from './components/nav'
import BookPage from './components/pages/books'
import EventPage from './components/pages/events'
import MenuPage from './components/pages/menu'
import HomePage from './components/pages/home'
import ProfilePage from './components/pages/profile'
import ContactPage from './components/pages/contact'
import OrderMenu from './components/orderMenu'
import ProductPage from './components/pages/productPage'
import Footer from './components/footer'

import { useState } from 'react'

function App() {
  const [path, setPath] = useState(window.location.pathname)
  return (
    <>
      <Navbar />
      {/* <div className='navSize'></div> */}
      {path === '/' && <HomePage />}
      {path === '/profile' && <ProfilePage />}
      {path === '/menu' && <MenuPage />}
      {path === '/category' && <ProductPage />}
      {path === '/events' && <EventPage />}
      {path === '/contact' && <ContactPage />}
      {path === '/reserves' && <BookPage />}
      {/* {path === '/' && <OrderMenu />} */}

      {/* LangComponent */}
      <Footer />
    </>
  )
}

export default App
