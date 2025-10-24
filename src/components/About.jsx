import React from 'react'
import '../../Style/About.css'

export default function About() {
  return (
    <div className="about-container">
      <h1>Biz haqimizda</h1>
      <p>
        Online Dorixona — sizning sog'lig'ingizni birinchi o'ringa qo'yadi.
        Biz sifatli dorilar, professional maslahat va tez yetkazib berishni taqdim etamiz.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>Sifatli mahsulot</h3>
          <p>Tasdiqlangan yetkazib beruvchilar va sertifikatlangan dorilar.</p>
        </div>
        <div className="about-card">
          <h3>Tez yetkazish</h3>
          <p>Shahar ichida tez yetkazib berish xizmati.</p>
        </div>
        <div className="about-card">
          <h3>Mijoz qo'llab-quvvatlash</h3>
          <p>Telefon va online chat orqali yordam.</p>
        </div>
      </div>
    </div>
  )
}
