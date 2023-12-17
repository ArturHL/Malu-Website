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

function App() {
  return (
    <>
      <Navbar />
      {/* <div className='navSize'></div> */}
      <HomePage />
      {/* <ProfilePage /> */}
      {/* <MenuPage /> */}
      {/* <ProductPage /> */}
      {/* <EventPage /> */}
      {/* <ContactPage /> */}
      {/* <BookPage /> */}
      {/* <OrderMenu /> */}
      {/* LangComponent */}
      <Footer />
    </>
  )
}

export default App
