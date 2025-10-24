const W_KEY = 'od_wish_v1'
import products from './getProducts' // used to map id->product for wishlist display

export function getWishlistIds() {
  try {
    const raw = localStorage.getItem(W_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function getWishlistCount() {
  return getWishlistIds().length
}

export function isInWishlist(id) {
  return getWishlistIds().includes(id)
}

export function toggleWishlist(id) {
  const ids = getWishlistIds()
  const idx = ids.indexOf(id)
  if (idx === -1) ids.push(id)
  else ids.splice(idx, 1)
  localStorage.setItem(W_KEY, JSON.stringify(ids))
}

export function getWishlistItems() {
  const ids = getWishlistIds()
  // map ids to product objects (if product list available)
  try {
    return ids.map(id => products.find(p => p.id === id)).filter(Boolean)
  } catch {
    return []
  }
}

export function removeFromWishlist(id) {
  const ids = getWishlistIds().filter(x => x !== id)
  localStorage.setItem(W_KEY, JSON.stringify(ids))
}
