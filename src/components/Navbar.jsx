import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(251,250,246,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E7E1D4',
        boxShadow: scrolled ? '0 1px 24px rgba(22,18,13,0.06)' : 'none',
        transition: 'box-shadow 0.4s',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px 0 28px', height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>

        {/* Logo */}
        <Link
          to="/"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, letterSpacing: '0.12em', color: '#16120D', textDecoration: 'none', cursor: 'pointer' }}
        >
          BILLMIX
        </Link>

        {/* Desktop nav */}
        <nav style={{ alignItems: 'center', gap: 40 }} className="nav-desktop">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: isActive ? '#16120D' : '#8B8071',
                textDecoration: 'none',
                paddingBottom: 4,
                borderBottom: isActive ? '1px solid #A07C4F' : '1px solid transparent',
                transition: 'color 0.25s, border-color 0.25s',
              })}
              onMouseEnter={e => { e.currentTarget.style.color = '#16120D' }}
              onMouseLeave={e => {
                const isActive = e.currentTarget.getAttribute('aria-current') === 'page'
                e.currentTarget.style.color = isActive ? '#16120D' : '#8B8071'
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Order CTA */}
        <a
          href="https://wa.me/919039978297"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-desktop"
          style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FBFAF6', background: '#16120D', padding: '13px 26px', textDecoration: 'none', transition: 'background 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.background = '#A07C4F'}
          onMouseLeave={e => e.currentTarget.style.background = '#16120D'}
        >
          Order · WhatsApp
        </a>

        {/* Hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
        >
          <div style={{ width: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ height: 1, background: '#16120D', display: 'block', transition: 'all 0.3s', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
            <span style={{ height: 1, background: '#16120D', display: 'block', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
            <span style={{ height: 1, background: '#16120D', display: 'block', transition: 'all 0.3s', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="nav-mobile-menu"
        style={{ overflow: 'hidden', maxHeight: open ? 280 : 0, opacity: open ? 1 : 0, transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s' }}
      >
        <div style={{ borderTop: '1px solid #E7E1D4', background: 'rgba(251,250,246,0.98)', padding: '20px 32px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: isActive ? '#16120D' : '#8B8071',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid #E7E1D4',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/919039978297"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ marginTop: 16, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FBFAF6', background: '#16120D', padding: '14px 24px', textDecoration: 'none', textAlign: 'center' }}
          >
            Order · WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
