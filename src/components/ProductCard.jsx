import React, { useState, useEffect } from 'react'
import { addToCart } from '../../Functions/addToCart'
import { toggleWishlist, isInWishlist } from '../../Functions/addToWishlist'
import '../../Style/ProductCard.css'

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(isInWishlist(product.id))

  useEffect(() => {
    setLiked(isInWishlist(product.id))
  }, [product.id])

  const onAdd = () => {
    addToCart(product)
    window.dispatchEvent(new Event('storage'))
    // small feedback
    const old = document.querySelector('.product-toast')
    if (!old) {
      const t = document.createElement('div')
      t.className = 'product-toast'
      t.textContent = `${product.name} savatchaga qo'shildi`
      document.body.appendChild(t)
      setTimeout(() => t.remove(), 1800)
    }
  }

  const onToggle = () => {
    toggleWishlist(product.id)
    setLiked(isInWishlist(product.id))
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-desc">{product.short}</p>
      <div className="product-meta">
        <div className="price">{product.price} UZS</div>
        <div className="dose">{product.dose}</div>
      </div>
      <div className="card-actions">
        <button className={`like-btn ${liked ? 'liked' : ''}`} onClick={onToggle}>
          {liked ? '💖' : '🤍'}
        </button>
        <button className="add-btn" onClick={onAdd}>Savatchaga</button>
      </div>
    </div>
  )
}
