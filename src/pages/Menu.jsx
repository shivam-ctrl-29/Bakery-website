import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import tiramisu from '../assets/tiramisu.webp'
import cookie from '../assets/cookie.webp'
import bananaBread from '../assets/banana-bread.webp'
import hummusClassic from '../assets/image2.webp'
import hummusBasil from '../assets/image1.webp'
import hummusPeri from '../assets/image3.webp'

const menuSections = [
  {
    category: 'Sweet Treats',
    course: 'COURSE 01 — SWEET',
    items: [
      { name: 'Tiramisu',     tag: 'SIGNATURE',    img: tiramisu,    desc: 'Espresso-soaked, house-made eggless ladyfingers layered with silky mascarpone. Pure indulgence.' },
      { name: 'Cookie 411',   tag: 'BROWN BUTTER', img: cookie,      desc: 'Soft-centred and chocolate-studded, with the warm, nutty richness of brown butter.' },
      { name: 'Banana Bread', tag: 'COMFORT',      img: bananaBread, desc: 'Warm cinnamon spice meets delicate banana in a perfectly moist tea cake.' },
    ],
  },
  {
    category: 'Hummus',
    course: 'COURSE 02 — SAVOURY',
    items: [
      { name: 'Classic',      tag: 'TRADITIONAL', img: hummusClassic, desc: 'A Mediterranean staple made the traditional way — smooth, rich, and endlessly versatile.' },
      { name: 'Basil Blend',  tag: 'HERBACEOUS',  img: hummusBasil,   desc: 'Creamy hummus folded with fresh basil and cold-pressed extra virgin olive oil.' },
      { name: 'Roasted Peri', tag: 'BOLD',         img: hummusPeri,   desc: 'Slow-roasted garlic finished with a spicy peri peri edge. Bold and quietly addictive.' },
    ],
  },
]

function MenuRow({ item }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="menu-row-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '132px 4fr 5fr auto',
        gap: 40,
        alignItems: 'center',
        padding: hovered ? '28px 0 28px 14px' : '28px 0',
        borderBottom: '1px solid #E7E1D4',
        background: hovered ? '#F5F1E7' : 'transparent',
        transition: 'background 0.35s, padding-left 0.35s',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#EDE7DA' }}>
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />
      </div>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.4vw, 36px)', margin: 0, lineHeight: 1.05 }}>{item.name}</p>
      <p className="menu-row-desc" style={{ fontSize: 13, lineHeight: 1.8, color: '#8B8071', margin: 0, maxWidth: 460 }}>{item.desc}</p>
      <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '0.18em', color: '#B3A896', margin: 0, whiteSpace: 'nowrap', textAlign: 'right' }}>{item.tag}</p>
    </div>
  )
}

export default function Menu() {
  const [headerRef, headerVisible] = useScrollReveal(0.05)

  return (
    <main className="page-in" style={{ flex: 1 }}>
      <section className="r-pad" style={{ maxWidth: 1380, margin: '0 auto', padding: '80px 48px 110px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          className="r-stack"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 40,
            flexWrap: 'wrap',
            marginBottom: 40,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.18em', color: '#A07C4F', margin: '0 0 24px' }}>
              ( THE MENU — SHORT &amp; HONEST )
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(52px, 9vw, 140px)', lineHeight: 0.92, letterSpacing: '-0.02em', margin: 0 }}>
              Six things<em style={{ color: '#A07C4F' }}>,</em><br />
              done <em style={{ color: '#A07C4F' }}>properly.</em>
            </h1>
          </div>
          <div style={{ paddingBottom: 8, maxWidth: 320 }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: '#8B8071', margin: '0 0 20px' }}>
              Everything is eggless and made to order — nothing sits on a shelf. Kindly reserve at least 24 hours before your delivery date.
            </p>
            <a
              href="https://wa.me/919039978297"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16120D', borderBottom: '1px solid #A07C4F', paddingBottom: 5, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#A07C4F'}
              onMouseLeave={e => e.currentTarget.style.color = '#16120D'}
            >
              Reserve an order →
            </a>
          </div>
        </div>

        {/* Menu sections */}
        {menuSections.map((section) => (
          <div key={section.category} style={{ marginTop: 64 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, borderBottom: '1px solid #16120D', paddingBottom: 16, flexWrap: 'wrap' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1, margin: 0 }}>
                {section.category}
              </h2>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', color: '#A07C4F', margin: 0, whiteSpace: 'nowrap' }}>
                {section.course}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {section.items.map(item => <MenuRow key={item.name} item={item} />)}
            </div>
          </div>
        ))}

        {/* Notes CTA */}
        <div className="r-grid-1" style={{ marginTop: 72, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', background: '#16120D', padding: '48px 48px' }}>
          <div className="r-pad" style={{ padding: '0' }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', color: '#A07C4F', margin: '0 0 18px' }}>
              ( KINDLY NOTE )
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.4vw, 34px)', lineHeight: 1.3, color: '#FBFAF6', margin: 0 }}>
              Every item is 100% eggless — and every order is reserved <em style={{ color: '#E3C892' }}>24 hours ahead.</em>
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href="https://wa.me/919039978297"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16120D', background: '#FBFAF6', padding: '18px 44px', textDecoration: 'none', transition: 'background 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#E3C892'}
              onMouseLeave={e => e.currentTarget.style.background = '#FBFAF6'}
            >
              Reserve an Order
            </a>
          </div>
        </div>

      </section>
    </main>
  )
}
