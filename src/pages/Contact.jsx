import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactRows = [
  { mono: '01', label: 'Call',      value: '+91 90399 78297',         href: 'tel:+919039978297' },
  { mono: '02', label: 'WhatsApp',  value: '+91 90399 78297',          href: 'https://wa.me/919039978297' },
  { mono: '03', label: 'Instagram', value: '@thedarshil19',            href: 'https://instagram.com/thedarshil19' },
  { mono: '04', label: 'Visit',     value: 'AM 240 Sukhliya, Indore',  href: 'https://maps.google.com/?q=Sukhliya,Indore' },
]

function ContactRow({ row }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={row.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 0',
        borderBottom: '1px solid #E7E1D4',
        textDecoration: 'none',
        background: hovered ? '#F5F1E7' : 'transparent',
        marginLeft: hovered ? -16 : 0,
        marginRight: hovered ? -16 : 0,
        paddingLeft: hovered ? 16 : 0,
        paddingRight: hovered ? 16 : 0,
        transition: 'background 0.3s, margin 0.3s, padding 0.3s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, minWidth: 0 }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '0.2em', color: '#B3A896', flexShrink: 0 }}>
          {row.mono}
        </span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A07C4F', flexShrink: 0, minWidth: 72 }}>
          {row.label}
        </span>
        <span style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(16px, 2.2vw, 30px)',
          color: '#16120D',
          lineHeight: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {row.value}
        </span>
      </div>
      <span style={{ color: hovered ? '#A07C4F' : '#C9B89A', fontSize: 16, flexShrink: 0, transition: 'color 0.25s, transform 0.25s', transform: hovered ? 'translateX(4px)' : 'none' }}>→</span>
    </a>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const [headerRef, headerVisible] = useScrollReveal(0.05)
  const [leftRef, leftVisible]     = useScrollReveal(0.05)
  const [rightRef, rightVisible]   = useScrollReveal(0.05)

  function handleChange(e) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const text = encodeURIComponent(`Hello Billmix!\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`)
    window.open(`https://wa.me/919039978297?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', message: '' })
  }

  const inputStyle = (field) => ({
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? '#E3C892' : 'rgba(251,250,246,0.2)'}`,
    background: 'transparent',
    padding: '0 0 11px',
    fontSize: 15,
    fontFamily: "'Archivo', sans-serif",
    color: '#FBFAF6',
    outline: 'none',
    transition: 'border-color 0.25s',
  })

  return (
    <main className="page-in" style={{ flex: 1 }}>
      <Helmet>
        <title>Reserve an Order — Billmix Eggless Patisserie Indore</title>
        <meta name="description" content="Reserve your order at least 24 hours ahead. Call, WhatsApp, or fill the form — everything at Billmix is made fresh, just for you." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bakery-website-tawny.vercel.app/contact" />
        <meta property="og:title" content="Reserve an Order — Billmix Eggless Patisserie Indore" />
        <meta property="og:description" content="Reserve your order at least 24 hours ahead. Call, WhatsApp, or fill the form — everything at Billmix is made fresh, just for you." />
        <meta property="og:url" content="https://bakery-website-tawny.vercel.app/contact" />
      </Helmet>

      {/* ── HEADER ── */}
      <div
        ref={headerRef}
        className="r-pad"
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          padding: '80px 48px 0',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', color: '#A07C4F', margin: '0 0 24px' }}>
          ( GET IN TOUCH )
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(48px, 8vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.02em', margin: '0 0 56px' }}>
          Say hello<em style={{ color: '#A07C4F' }}>.</em>
        </h1>
      </div>

      {/* ── BODY ── */}
      <div className="r-pad r-grid-1" style={{ maxWidth: 1380, margin: '0 auto', padding: '0 48px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>

        {/* Left — contact rows + map */}
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div style={{ borderTop: '1px solid #E7E1D4' }}>
            {contactRows.map((row) => <ContactRow key={row.mono} row={row} />)}
          </div>

          {/* Map */}
          <div style={{ marginTop: 36, position: 'relative', height: 260, overflow: 'hidden', background: '#EDE7DA' }}>
            <iframe
              title="Billmix location"
              src="https://maps.google.com/maps?q=Sukhliya%2C+Indore%2C+Madhya+Pradesh+452010&output=embed"
              width="100%" height="100%"
              style={{ border: 0, filter: 'grayscale(60%) sepia(12%) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(251,250,246,0.94)', padding: '8px 14px' }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '0.16em', color: '#16120D', margin: 0 }}>
                AM 240 SUKHLIYA — INDORE, MP
              </p>
            </div>
          </div>
        </div>

        {/* Right — dark form */}
        <div
          ref={rightRef}
          className="contact-form-pad"
          style={{
            background: '#16120D',
            padding: '52px 48px 56px',
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.85s cubic-bezier(0.22,1,0.36,1) 0.1s',
          }}
        >
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '0.2em', color: '#A07C4F', margin: '0 0 14px' }}>( SEND A MESSAGE )</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.8vw, 38px)', color: '#FBFAF6', margin: '0 0 40px', lineHeight: 1.15 }}>
            Tell us what you'd like<br /><em style={{ color: '#E3C892' }}>— and when.</em>
          </p>

          {sent && (
            <div style={{ borderLeft: '2px solid #E3C892', background: 'rgba(227,200,146,0.08)', padding: '12px 18px', marginBottom: 28 }}>
              <p style={{ fontSize: 12.5, color: '#E3C892', margin: 0 }}>Opening WhatsApp — we'll get back to you shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            {[
              { id: 'name',  label: '01 — YOUR NAME',    type: 'text', placeholder: 'Rahul Sharma' },
              { id: 'phone', label: '02 — PHONE NUMBER', type: 'tel',  placeholder: '+91 98765 43210' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} style={{ display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, letterSpacing: '0.22em', color: 'rgba(251,250,246,0.4)', marginBottom: 12 }}>
                  {label}
                </label>
                <input
                  id={id} name={id} type={type} required
                  value={form[id]} onChange={handleChange}
                  onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                  placeholder={placeholder}
                  style={inputStyle(id)}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" style={{ display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, letterSpacing: '0.22em', color: 'rgba(251,250,246,0.4)', marginBottom: 12 }}>
                03 — MESSAGE / ORDER DETAILS
              </label>
              <textarea
                id="message" name="message" rows={4} required
                value={form.message} onChange={handleChange}
                onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                placeholder="I'd like to reserve a Tiramisu for delivery on…"
                style={{ ...inputStyle('message'), resize: 'none' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <button
                type="submit"
                onMouseEnter={e => e.currentTarget.style.background = '#E3C892'}
                onMouseLeave={e => e.currentTarget.style.background = '#FBFAF6'}
                style={{ cursor: 'pointer', fontFamily: "'Archivo', sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#16120D', background: '#FBFAF6', border: 'none', padding: '16px 36px', transition: 'background 0.3s' }}
              >
                Send via WhatsApp
              </button>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, letterSpacing: '0.16em', color: 'rgba(251,250,246,0.3)', margin: 0 }}>RESERVE 24H AHEAD</p>
            </div>
          </form>
        </div>

      </div>
    </main>
  )
}
