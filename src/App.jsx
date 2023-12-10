import './App.css'
import Navbar from './components/nav'
import BookPage from './components/pages/books'
import EventPage from './components/pages/events'
import MenuPage from './components/pages/menu'
import HomePage from './components/pages/home'
import ProfilePage from './components/pages/profile'
import ContactPage from './components/pages/contact'

function App() {
  return (
    <>
      <Navbar />
      {/* <div className='navSize'></div> */}
      {/* <HomePage /> */}
      {/* <ProfilePage /> */}
      <MenuPage />
      {/* <EventPage /> */}
      {/* <ContactPage /> */}
      {/* <BookPage /> */}
      {/* <MobileMenu /> */}
      {/* LangComponent */}
    </>
  )
}

export default App
