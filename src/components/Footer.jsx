import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #E7E1D4', background: '#FBFAF6' }}>
      <div className="r-pad" style={{ maxWidth: 1320, margin: '0 auto', padding: '64px 48px 48px' }}>

        <div className="footer-cols" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap', marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, letterSpacing: '0.12em', margin: '0 0 14px' }}>[BAKERY NAME]</p>
            <p style={{ fontSize: 12.5, lineHeight: 1.8, color: '#8B8071', margin: 0, maxWidth: 260 }}>
              An [bakery tagline], made at home in [CITY, STATE]. Reserved a day ahead — made only for you.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 80, flexWrap: 'wrap' }}>
            {/* Explore */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p style={{ fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#B3A896', margin: '0 0 4px' }}>Explore</p>
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ fontSize: 12.5, color: '#8B8071', textDecoration: 'none', transition: 'color 0.25s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#16120D'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8B8071'}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p style={{ fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#B3A896', margin: '0 0 4px' }}>Contact</p>
              {[
                { label: '[PHONE NUMBER]', href: 'tel:+[WHATSAPP NUMBER]' },
                { label: '@[INSTAGRAM HANDLE]', href: 'https://instagram.com/[INSTAGRAM HANDLE]' },
                { label: 'WhatsApp', href: 'https://wa.me/[WHATSAPP NUMBER]' },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{ fontSize: 12.5, color: '#8B8071', textDecoration: 'none', transition: 'color 0.25s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#16120D'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8B8071'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #E7E1D4', paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 11, color: '#B3A896', margin: 0 }}>© {new Date().getFullYear()} [BAKERY NAME] · Eggless, always.</p>
          <p style={{ fontSize: 11, color: '#B3A896', margin: 0 }}>[CITY, STATE], Madhya Pradesh</p>
        </div>

      </div>
    </footer>
  )
}
