import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './../Style/Navbar.css'
import './../Style/Home.css'
import './../Style/ProductCard.css'
import './../Style/About.css'
import './../Style/Contact.css'
import './../Style/Wishlist.css'
import './../Style/Cart.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



