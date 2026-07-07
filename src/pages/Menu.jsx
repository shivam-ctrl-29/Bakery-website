import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'
// TEMPLATE: Replace these URLs with your own product photos
const tiramisu    = 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80'
const cookie      = 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80'
const bananaBread = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80'
const hummusClassic = 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=800&q=80'
const hummusBasil   = 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80'
const hummusPeri    = 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80'

// TEMPLATE: Edit these menu sections with your own categories and items
const menuSections = [
  {
    category: '[CATEGORY 1 NAME]',
    course: 'COURSE 01 — [LABEL]',
    items: [
      { name: '[ITEM 1 NAME]', tag: '[TAG]', img: tiramisu,    desc: '[Item 1 description — one or two sentences about taste, texture, or what makes it special.]' },
      { name: '[ITEM 2 NAME]', tag: '[TAG]', img: cookie,      desc: '[Item 2 description — one or two sentences about taste, texture, or what makes it special.]' },
      { name: '[ITEM 3 NAME]', tag: '[TAG]', img: bananaBread, desc: '[Item 3 description — one or two sentences about taste, texture, or what makes it special.]' },
    ],
  },
  {
    category: '[CATEGORY 2 NAME]',
    course: 'COURSE 02 — [LABEL]',
    items: [
      { name: '[ITEM 4 NAME]', tag: '[TAG]', img: hummusClassic, desc: '[Item 4 description — one or two sentences about taste, texture, or what makes it special.]' },
      { name: '[ITEM 5 NAME]', tag: '[TAG]', img: hummusBasil,   desc: '[Item 5 description — one or two sentences about taste, texture, or what makes it special.]' },
      { name: '[ITEM 6 NAME]', tag: '[TAG]', img: hummusPeri,    desc: '[Item 6 description — one or two sentences about taste, texture, or what makes it special.]' },
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
      <Helmet>
        <title>Our Menu — [BAKERY NAME] [BAKERY TAGLINE] [CITY]</title>
        <meta name="description" content="Six things, done properly. Everything eggless, made to order. Reserve at least 24 hours before your delivery date." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bakery-website-tawny.vercel.app/menu" />
        <meta property="og:title" content="Our Menu — [BAKERY NAME] [BAKERY TAGLINE] [CITY]" />
        <meta property="og:description" content="Six things, done properly. Everything eggless, made to order. Reserve at least 24 hours before your delivery date." />
        <meta property="og:url" content="https://bakery-website-tawny.vercel.app/menu" />
      </Helmet>
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
              [MENU HEADLINE],<br />
              <em style={{ color: '#A07C4F' }}>[MENU SUBHEADLINE].</em>
            </h1>
          </div>
          <div style={{ paddingBottom: 8, maxWidth: 320 }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: '#8B8071', margin: '0 0 20px' }}>
              [Short intro sentence about your menu — e.g. "Everything is made to order, nothing sits on a shelf."]
            </p>
            <a
              href="https://wa.me/[WHATSAPP NUMBER]"
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
              href="https://wa.me/[WHATSAPP NUMBER]"
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
