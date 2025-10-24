import React, { useEffect, useState } from 'react'
import { getCartCount } from '../../Functions/addToCart'
import { getWishlistCount } from '../../Functions/addToWishlist'
import '../../Style/Navbar.css'
export default function Navbar({ onNavigate, openCart, goWishlist }) {
  const [cartCount, setCartCount] = useState(0)
  const [wishCount, setWishCount] = useState(0)

  useEffect(() => {
    setCartCount(getCartCount())
    setWishCount(getWishCount())
    function onStorage() {
      setCartCount(getCartCount())
      setWishCount(getWishCount())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  // helper to avoid import circular when reading counts (small helper)
  function getWishCount() {
    try {
      return getWishlistCount()
    } catch {
      return 0
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo" onClick={() => onNavigate('home')}>
          <span className="logo-text">Online</span>
          <span className="logo-pill">Dorixona</span>
        </div>
      </div>

      <div className="navbar-links">
        <button className="nav-btn" onClick={() => onNavigate('home')}>Home</button>
        <button className="nav-btn" onClick={() => onNavigate('about')}>About</button>
        <button className="nav-btn" onClick={() => onNavigate('contact')}>Contact</button>
      </div>

      <div className="navbar-icons">
        <button className="icon-btn" onClick={() => goWishlist()}>
          ❤️ <span className="badge">{wishCount}</span>
        </button>
        <button className="icon-btn" onClick={openCart}>
          🛒 <span className="badge">{cartCount}</span>
        </button>
      </div>
    </nav>
  )
}
