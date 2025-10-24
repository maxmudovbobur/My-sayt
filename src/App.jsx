import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Wishlist from './components/Wishlist.jsx'
import Cart from './components/Cart.jsx'

export default function App() {
  const [route, setRoute] = useState('home') // 'home' | 'about' | 'contact' | 'wishlist'
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="app-root">
      <Navbar
        onNavigate={(r) => setRoute(r)}
        openCart={() => setCartOpen(true)}
        goWishlist={() => setRoute('wishlist')}
      />
      <main className="main-container">
        {route === 'home' && <Home />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
        {route === 'wishlist' && <Wishlist />}
      </main>

      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      <footer className="site-footer">© {new Date().getFullYear()} Online Dorixona</footer>
    </div>
  )
}
