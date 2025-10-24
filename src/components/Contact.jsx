import React, { useState } from 'react'
import '../../Style/Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()
    alert('Xabaringiz qabul qilindi (demo).')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-container">
      <h2>Aloqa</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <input name="name" placeholder="Ism" value={form.name} onChange={onChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <textarea name="message" placeholder="Xabaringiz" value={form.message} onChange={onChange} required />
        <button type="submit">Yuborish</button>
      </form>

      <div className="contact-info">
        <p><strong>Manzil:</strong> Toshkent, O'zbekiston</p>
        <p><strong>Tel:</strong> +998 90 000 00 00</p>
      </div>
    </div>
  )
}
