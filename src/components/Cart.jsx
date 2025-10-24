import React, { useEffect, useState } from 'react'
import { getCartItems, removeFromCart, clearCart } from '../../Functions/addToCart'
import '../../Style/Cart.css'

export default function Cart({ open, onClose }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    function onStorage() { setItems(getCartItems()) }
    setItems(getCartItems())
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  if (!open) return null

  const total = items.reduce((s, it) => s + Number(it.price) * (it.qty || 1), 0)

  return (
    <div className="cart-overlay">
      <div className="cart-panel">
        <header className="cart-header">
          <h3>Savatcha</h3>
          <button className="close-btn" onClick={onClose}>✖</button>
        </header>

        <div className="cart-list">
          {items.length === 0 ? <p>Savatcha bo'sh</p> : items.map(it => (
            <div className="cart-item" key={it.id}>
              <img src={it.image} alt={it.name} />
              <div className="cart-meta">
                <h4>{it.name}</h4>
                <p>Qty: {it.qty || 1}</p>
              </div>
              <div className="cart-right">
                <div className="price">{it.price} UZS</div>
                <button onClick={() => { removeFromCart(it.id); setItems(getCartItems()); window.dispatchEvent(new Event('storage')) }}>
                  O'chirish
                </button>
              </div>
            </div>
          ))}
        </div>

        <footer className="cart-footer">
          <div className="cart-total">Jami: {total} UZS</div>
          <div className="cart-actions">
            <button className="clear-btn" onClick={() => { clearCart(); setItems([]); window.dispatchEvent(new Event('storage')) }}>
              Hammasini o'chirish
            </button>
            <button className="checkout-btn" onClick={() => alert('To‘lov demo uchun yo‘q')}>To‘lov</button>
          </div>
        </footer>
      </div>
    </div>
  )
}
