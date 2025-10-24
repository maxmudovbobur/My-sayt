const CART_KEY = 'od_cart_v1'

export function getCartItems() {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function getCartCount() {
  return getCartItems().reduce((s, i) => s + (i.qty || 1), 0)
}

export function addToCart(product) {
  const items = getCartItems()
  const found = items.find(i => i.id === product.id)
  if (found) {
    found.qty = (found.qty || 1) + 1
  } else {
    items.push({ ...product, qty: 1 })
  }
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export function removeFromCart(id) {
  const items = getCartItems().filter(i => i.id !== id)
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export function clearCart() {
  localStorage.removeItem(CART_KEY)
}
