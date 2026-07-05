import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import tiramisu from '../assets/tiramisu.jpeg'
import cookie from '../assets/cookie.jpg'
import bananaBread from '../assets/banana-bread.jpg'
import hummus from '../assets/hummus.jpg'

const credoBase = [
  '100% Eggless', 'Home Kitchen', 'Small Batches', 'Made to Order',
  'Reserved 24h Ahead', 'Sukhliya · Indore',
]
const credoItems = [...credoBase, ...credoBase, ...credoBase, ...credoBase]

function HoverImg({ src, alt, style }) {
  return (
    <div style={{ ...style, overflow: 'hidden', background: '#EDE7DA', position: 'relative' }}>
      <img
        src={src}
        alt={alt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.22,1,0.36,1)' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
    </div>
  )
}

export default function Home() {
  const [collRef, collVisible] = useScrollReveal(0.05)
  const [manifRef, manifVisible] = useScrollReveal(0.1)
  const [ctaRef, ctaVisible] = useScrollReveal(0.15)

  return (
    <main className="page-in" style={{ flex: 1 }}>

      {/* ── HERO — full-viewport cinematic ── */}
      <section style={{ position: 'relative', height: 'calc(100vh - 77px)', minHeight: 640, overflow: 'hidden', background: '#16120D' }}>

        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src={tiramisu}
            alt="Billmix signature tiramisu"
            className="hero-zoom"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,11,7,0.82) 0%, rgba(15,11,7,0.25) 45%, rgba(15,11,7,0.35) 100%)' }} />

        {/* Corner meta */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '32px 48px' }}>
          <p className="hero-meta-l" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', color: 'rgba(251,250,246,0.75)', margin: 0 }}>
            ( EGGLESS PATISSERIE )
          </p>
          <p className="hero-meta-r" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', color: 'rgba(251,250,246,0.75)', margin: 0 }}>
            SUKHLIYA · INDORE — EST. 2024
          </p>
        </div>

        {/* Headline block — pinned to bottom */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '0 48px 44px' }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(64px, 10.5vw, 168px)', lineHeight: 0.94, letterSpacing: '-0.02em', color: '#FBFAF6', margin: '0 0 40px' }}>
            <span className="hero-line-1" style={{ display: 'block' }}>Eggless,</span>
            <span className="hero-line-2" style={{ display: 'block' }}><em style={{ color: '#E3C892' }}>uncompromised.</em></span>
          </h1>

          <div className="hero-body" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'rgba(251,250,246,0.72)', maxWidth: 380, margin: 0 }}>
              Small batches from a home kitchen in Sukhliya. Composed by hand, reserved a day ahead, made only for you.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919039978297"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16120D', background: '#FBFAF6', padding: '18px 42px', textDecoration: 'none', transition: 'background 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#E3C892'}
                onMouseLeave={e => e.currentTarget.style.background = '#FBFAF6'}
              >
                Reserve an Order
              </a>
              <Link
                to="/menu"
                style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FBFAF6', border: '1px solid rgba(251,250,246,0.4)', padding: '17px 42px', textDecoration: 'none', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#FBFAF6'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(251,250,246,0.4)'}
              >
                The Menu
              </Link>
            </div>
          </div>

          {/* Meta strip */}
          <div className="hero-strip" style={{ borderTop: '1px solid rgba(251,250,246,0.22)', marginTop: 40, paddingTop: 22, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.16em', color: 'rgba(251,250,246,0.6)', margin: 0 }}>01 — 100% EGGLESS, ALWAYS</p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.16em', color: 'rgba(251,250,246,0.6)', margin: 0, textAlign: 'center' }}>02 — MADE TO ORDER, NEVER STOCKED</p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.16em', color: 'rgba(251,250,246,0.6)', margin: 0, textAlign: 'right' }}>03 — RESERVED 24 HOURS AHEAD</p>
          </div>
        </div>
      </section>

      {/* ── CREDO STRIP ── */}
      <div style={{ borderTop: '1px solid #E7E1D4', borderBottom: '1px solid #E7E1D4', padding: '18px 0', overflow: 'hidden' }}>
        <div className="credo-track">
          {credoItems.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 10.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B3A896', padding: '0 34px' }}>{item}</span>
              <span style={{ color: '#D8D0BE', fontSize: 9 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── COLLECTION — editorial 7/5 grid ── */}
      <section
        ref={collRef}
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          padding: '110px 48px 30px',
          opacity: collVisible ? 1 : 0,
          transform: collVisible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48, marginBottom: 72, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.18em', color: '#A07C4F', margin: '0 0 22px' }}>( BESTSELLERS )</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(36px, 4.2vw, 60px)', lineHeight: 1.08, letterSpacing: '-0.015em', margin: 0, maxWidth: 640 }}>
              The two everyone <em style={{ color: '#A07C4F' }}>keeps coming back for.</em>
            </h2>
          </div>
          <Link
            to="/menu"
            style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16120D', borderBottom: '1px solid #A07C4F', paddingBottom: 5, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#A07C4F'}
            onMouseLeave={e => e.currentTarget.style.color = '#16120D'}
          >
            View the menu →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start', marginBottom: 64 }}>
          {/* Tiramisu */}
          <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <HoverImg src={tiramisu} alt="Tiramisu" style={{ aspectRatio: '4/3', marginBottom: 26 }} />
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, marginBottom: 10 }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 2.6vw, 38px)', margin: 0, lineHeight: 1 }}>Tiramisu</p>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.16em', color: '#B3A896', margin: 0, whiteSpace: 'nowrap' }}>№ 01 — THE SIGNATURE</p>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: '#8B8071', margin: 0, maxWidth: 480 }}>
              Espresso-soaked, house-made eggless ladyfingers layered with silky mascarpone. The reason most people find us.
            </p>
          </Link>

          {/* Cookie 411 */}
          <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <HoverImg src={cookie} alt="Cookie 411" style={{ aspectRatio: '4/3', marginBottom: 26 }} />
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, marginBottom: 10 }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 2.6vw, 38px)', margin: 0, lineHeight: 1 }}>Cookie 411</p>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.16em', color: '#B3A896', margin: 0, whiteSpace: 'nowrap' }}>№ 02 — SWEET</p>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: '#8B8071', margin: 0, maxWidth: 420 }}>
              Brown butter, dark chocolate, a soft molten centre. Best eaten warm, within the hour.
            </p>
          </Link>
        </div>

        <div style={{ borderTop: '1px solid #E7E1D4', padding: '26px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.14em', color: '#B3A896', margin: 0 }}>
            FULL MENU — HUMMUS, BANANA BREAD &amp; MORE
          </p>
          <Link
            to="/menu"
            style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16120D', borderBottom: '1px solid #A07C4F', paddingBottom: 5, textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#A07C4F'}
            onMouseLeave={e => e.currentTarget.style.color = '#16120D'}
          >
            View the menu →
          </Link>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section
        ref={manifRef}
        style={{
          background: '#F5F1E9',
          borderTop: '1px solid #E7E1D4',
          borderBottom: '1px solid #E7E1D4',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '120px 48px 130px',
            opacity: manifVisible ? 1 : 0,
            transform: manifVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.85s cubic-bezier(0.22,1,0.36,1) 0.1s',
          }}
        >
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.18em', color: '#A07C4F', margin: '0 0 56px', textAlign: 'center' }}>
            ( THE BILLMIX MANIFESTO )
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(34px, 4.8vw, 68px)', lineHeight: 1.28, letterSpacing: '-0.015em', color: '#16120D', margin: '0 auto 56px', textAlign: 'center' }}>
            We bake without eggs, without shortcuts, and without a factory — every order leaves a home kitchen made for exactly one person —{' '}
            <em style={{ color: '#A07C4F' }}>you.</em>
          </p>

          <div style={{ width: 40, height: 1, background: '#C9B89A', margin: '0 auto 40px' }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <p style={{ fontSize: 13, margin: 0, fontWeight: 500, textAlign: 'center' }}>
              Darshil Yadav{' '}
              <span style={{ color: '#8B8071', fontWeight: 400 }}>— Founder, Sukhliya · Indore</span>
            </p>
            <Link
              to="/about"
              style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16120D', borderBottom: '1px solid #A07C4F', paddingBottom: 5, textDecoration: 'none', transition: 'color 0.3s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.currentTarget.style.color = '#A07C4F'}
              onMouseLeave={e => e.currentTarget.style.color = '#16120D'}
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} style={{ background: '#16120D' }}>
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '120px 48px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 48,
            flexWrap: 'wrap',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.18em', color: '#A07C4F', margin: '0 0 32px' }}>( RESERVATIONS )</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(38px, 4.5vw, 68px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: '#FBFAF6', margin: 0 }}>
              Everything is made to order.<br />
              <em style={{ color: '#C9B187' }}>Reserve a day ahead.</em>
            </h2>
          </div>
          <a
            href="https://wa.me/919039978297"
            target="_blank"
            rel="noopener noreferrer"
            style={{ flexShrink: 0, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16120D', background: '#FBFAF6', padding: '18px 44px', textDecoration: 'none', transition: 'background 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#C9B187'}
            onMouseLeave={e => e.currentTarget.style.background = '#FBFAF6'}
          >
            WhatsApp Us
          </a>
        </div>
      </section>

    </main>
  )
}
