import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '../../Functions/getProducts'
import '../../Style/Home.css'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="home-container">
      <section className="home-banner">
        <div className="banner-text">
          <h1>Online Dorixona</h1>
          <p>Tez, ishonchli va qulay — dorilar uyingizga yetkaziladi.</p>
        </div>
        <img
          className="banner-img"
          src="https://c8.alamy.com/comp/2D7NNPX/online-pharmacy-isometric-concept-24-hours-pharmacy-app-vector-illustration-online-app-pharmacy-and-medicine-medical-treatment-2D7NNPX.jpg"
          alt="dorixona"
        />
      </section>

      <section className="products-section">
        <h2>Mahsulotlar ({products.length} ta)</h2>
        {loading ? (
          <p>Yuklanmoqda...</p>
        ) : (
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

// src="https://c8.alamy.com/comp/2D7NNPX/online-pharmacy-isometric-concept-24-hours-pharmacy-app-vector-illustration-online-app-pharmacy-and-medicine-medical-treatment-2D7NNPX.jpg"