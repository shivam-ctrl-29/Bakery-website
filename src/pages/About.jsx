import { useScrollReveal } from '../hooks/useScrollReveal'
import founder from '../assets/founder.jpeg'

const values = [
  { num: '01', title: 'Always Eggless',  desc: 'Every single product — no exceptions, no compromises, no hidden ingredients.' },
  { num: '02', title: 'A Home Kitchen',  desc: 'Made in a real home kitchen with genuine care, attention, and fresh ingredients.' },
  { num: '03', title: 'Made to Order',   desc: 'Nothing pre-made. Your order is baked fresh, just for you, every single time.' },
]

export default function About() {
  const [heroRef, heroVisible]     = useScrollReveal(0.05)
  const [storyRef, storyVisible]   = useScrollReveal(0.08)
  const [valRef, valVisible]       = useScrollReveal(0.08)
  const [ctaRef, ctaVisible]       = useScrollReveal(0.15)

  return (
    <main className="page-in" style={{ flex: 1 }}>

      {/* ── HERO — contained split with framed photo ── */}
      <section className="r-pad r-grid-1" style={{ maxWidth: 1380, margin: '0 auto', padding: '80px 48px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

        {/* Left — square framed photo */}
        <div style={{ position: 'relative' }}>
          <div className="about-frame-offset" style={{ position: 'absolute', top: 16, left: 16, right: -16, bottom: -16, border: '1px solid #C9B89A', zIndex: 0 }} />
          <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', background: '#1A1410', zIndex: 1 }}>
            <img
              src={founder}
              alt="Darshil Yadav — Founder, Billmix"
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: '60% 8%',
                filter: 'grayscale(45%) sepia(18%) contrast(1.05) brightness(0.88)',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(22,16,10,0.5) 0%, transparent 50%)' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '0.22em', color: 'rgba(251,250,246,0.6)', margin: '0 0 5px' }}>DARSHIL YADAV</p>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '0.22em', color: 'rgba(251,250,246,0.35)', margin: 0 }}>FOUNDER · EST. 2024</p>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div
          ref={heroRef}
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            paddingBottom: 32,
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#A07C4F', margin: '0 0 36px' }}>( OUR STORY )</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(38px, 5vw, 76px)', lineHeight: 1.05, letterSpacing: '-0.015em', margin: '0 0 32px' }}>
            Made at home.<br /><em style={{ color: '#A07C4F' }}>Made with intent.</em>
          </h1>
          <div style={{ width: 36, height: 1, background: '#C9B89A', margin: '0 0 32px' }} />
          <p style={{ fontSize: 14.5, lineHeight: 1.95, color: '#8B8071', maxWidth: 400, margin: 0 }}>
            Billmix began in 2024 with a simple conviction — that baking without eggs should mean compromising on nothing. Every piece is made fresh in a home kitchen in Sukhliya, Indore. No factory. No shortcuts.
          </p>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="r-pad" style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 48px' }}>
        <div
          ref={storyRef}
          className="r-grid-1"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 72,
            opacity: storyVisible ? 1 : 0,
            transform: storyVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div>
            <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2.2vw, 27px)', lineHeight: 1.5, margin: '0 0 24px' }}>
              "I make food that people genuinely enjoy eating."
            </blockquote>
            <div style={{ width: 28, height: 1, background: '#A07C4F', marginBottom: 14 }} />
            <p style={{ fontSize: 13, margin: '0 0 4px', fontWeight: 500 }}>Darshil Yadav</p>
            <p style={{ fontSize: 11, color: '#8B8071', margin: 0 }}>Founder · Billmix · Est. 2024</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, fontSize: 14, lineHeight: 1.95, color: '#8B8071' }}>
            <p style={{ margin: 0 }}>
              Hello — I'm Darshil, the person behind Billmix. This began as a passion project: I loved making food people actually enjoyed eating. Not mass-produced. Not frozen. Real, home-made bakes with good ingredients.
            </p>
            <p style={{ margin: 0 }}>
              Everything here is <span style={{ color: '#16120D', fontWeight: 500 }}>entirely eggless</span>. I've spent months perfecting recipes that prove great baking doesn't need eggs — from a silky tiramisu built on house-made ladyfingers to the brown-butter Cookie 411.
            </p>
            <p style={{ margin: 0 }}>
              We work out of a home kitchen in Sukhliya, Indore, and every order gets personal attention. You're not a number here — you're the reason I'm baking that day.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES — dark ── */}
      <section style={{ background: '#16120D' }}>
        <div
          ref={valRef}
          className="r-pad"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '100px 48px',
            opacity: valVisible ? 1 : 0,
            transform: valVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A07C4F', margin: '0 0 56px' }}>What we stand for</p>
          <div className="r-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {values.map(({ num, title, desc }, i) => (
              <div
                key={num}
                style={{
                  borderTop: '1px solid rgba(251,250,246,0.14)',
                  paddingTop: 28,
                  opacity: valVisible ? 1 : 0,
                  transform: valVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`,
                }}
              >
                <p style={{ fontSize: 11, letterSpacing: '0.24em', color: '#A07C4F', margin: '0 0 20px' }}>{num}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2vw, 25px)', color: '#FBFAF6', margin: '0 0 12px', lineHeight: 1.15 }}>{title}</p>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: '#948A7B', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        className="r-pad r-stack"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '80px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3vw, 38px)', margin: 0 }}>
          Curious to try something?
        </p>
        <a
          href="https://wa.me/919039978297"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flexShrink: 0, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FBFAF6', background: '#16120D', padding: '17px 40px', textDecoration: 'none', transition: 'background 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.background = '#A07C4F'}
          onMouseLeave={e => e.currentTarget.style.background = '#16120D'}
        >
          Order on WhatsApp
        </a>
      </section>

    </main>
  )
}
