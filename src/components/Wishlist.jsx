import React, { useEffect, useState } from 'react'
import { getWishlistItems, removeFromWishlist } from '../../Functions/addToWishlist'
import '../../Style/Wishlist.css'

export default function Wishlist() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getWishlistItems())
    function onStorage() { setItems(getWishlistItems()) }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const remove = (id) => {
    removeFromWishlist(id)
    setItems(getWishlistItems())
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <div className="wishlist-container">
      <h2>Sevimli dorilar</h2>
      {items.length === 0 ? (
        <p>Sevimlilar bo‘sh</p>
      ) : (
        <div className="wishlist-grid">
          {items.map((p) => (
            <div className="wish-card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <div className="wish-meta">
                <h4>{p.name}</h4>
                <div className="wish-actions">
                  <button onClick={() => remove(p.id)}>O'chirish</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
