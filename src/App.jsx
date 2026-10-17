import { useEffect, useState } from 'react'

const PHONE_DISPLAY = '+91 98180 80294'
const PHONE_TEL = 'tel:+919818802494'
const WHATSAPP = 'https://wa.me/919818802494'

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#plans', label: 'Plans' },
  { href: '#contact', label: 'Contact' },
]

const STATS = [
  { value: '2009', label: 'Printing since' },
  { value: '1800+', label: 'Orders delivered' },
  { value: '250+', label: 'Projects completed' },
  { value: '22', label: 'People on the team' },
]

const CATEGORIES = ['All', 'Posters & flyers', 'Magazines', 'Digital', 'Mugs']
const TONES = ['#E3EEF3', '#F5E3EA', '#F6EFD0', '#E6E6E4']
const INKS = ['#2EA3D6', '#E0397F', '#E8A800', '#15171A']

const WORKS = [
  { title: 'Event poster series', cat: 'Posters & flyers', kind: 'poster' },
  { title: 'Quarterly journal', cat: 'Magazines', kind: 'magazine' },
  { title: 'Shopfront banner', cat: 'Digital', kind: 'banner' },
  { title: 'Custom logo mugs', cat: 'Mugs', kind: 'mug' },
  { title: 'Promotional flyers', cat: 'Posters & flyers', kind: 'flyer' },
  { title: 'Monthly magazine run', cat: 'Magazines', kind: 'magazine' },
  { title: 'Large-format print', cat: 'Digital', kind: 'banner' },
  { title: 'Gift mug set', cat: 'Mugs', kind: 'mug' },
].map((w, i) => ({ ...w, tone: TONES[i % 4], ink: INKS[(i + 1) % 4] }))

const SERVICES = [
  ['Poster & flyer printing', 'Single sheets to bulk runs for campaigns, events and shop promotions.'],
  ['Magazines & journals', 'Regularly published titles, journals and bound booklets on offset presses.'],
  ['Digital printing', 'Banners, murals and short runs where speed and variety matter.'],
  ['Mug design printing', 'Custom mugs and gifting with your artwork or logo applied.'],
  ['Branding & design', 'Project concept, documentation and branding for educational and business clients.'],
]

const STEPS = [
  ['Send your brief', 'Call or WhatsApp with what you need, quantity and deadline.'],
  ['Approve the proof', 'We share a design or sample and confirm the quote with you.'],
  ['We print', 'Your job runs on our own presses with quality checks along the way.'],
  ['Delivered on time', 'Pick up from Okhla or get it delivered to your door.'],
]

const PLANS = [
  { name: 'Basic', price: '₹5,000', features: [true, true, false, false] },
  { name: 'Optimal', price: '₹7,000', features: [true, true, true, false], featured: true },
  { name: 'Premium', price: '₹8,000', features: [true, true, true, true] },
]
const FEATURES = ['Project concept', 'Documentation', 'Branding', 'Printing']

const WHATSAPP_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

function Logo() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
      <circle cx="15" cy="15" r="13" fill="none" stroke="#15171A" strokeWidth="2" />
      <circle cx="15" cy="15" r="7.5" fill="none" stroke="#15171A" strokeWidth="2" />
      <circle cx="15" cy="15" r="2.6" fill="var(--accent)" />
    </svg>
  )
}

function WorkArt({ kind, ink }) {
  const common = { viewBox: '0 0 400 300', 'aria-hidden': true }
  if (kind === 'poster')
    return (
      <svg {...common}>
        <rect x="138" y="36" width="124" height="190" rx="3" fill="#fff" />
        <rect x="150" y="50" width="100" height="84" fill={ink} />
        <circle cx="200" cy="92" r="22" fill="#fff" />
        <rect x="150" y="148" width="100" height="8" fill="#15171A" />
        <rect x="150" y="164" width="70" height="5" fill="#B9BDC4" />
        <rect x="150" y="176" width="84" height="5" fill="#B9BDC4" />
        <rect x="150" y="204" width="40" height="10" rx="5" fill={ink} />
        <rect x="132" y="232" width="136" height="4" rx="2" fill="#15171A" opacity=".12" />
      </svg>
    )
  if (kind === 'flyer')
    return (
      <svg {...common}>
        <g transform="rotate(-8 160 150)">
          <rect x="96" y="56" width="120" height="170" rx="3" fill="#fff" />
          <rect x="108" y="70" width="96" height="56" fill="#15171A" />
          <rect x="108" y="140" width="80" height="6" fill={ink} />
          <rect x="108" y="154" width="96" height="4" fill="#B9BDC4" />
          <rect x="108" y="164" width="70" height="4" fill="#B9BDC4" />
        </g>
        <g transform="rotate(7 250 150)">
          <rect x="190" y="50" width="120" height="170" rx="3" fill="#fff" />
          <rect x="202" y="64" width="96" height="96" fill={ink} />
          <rect x="202" y="176" width="80" height="6" fill="#15171A" />
          <rect x="202" y="190" width="60" height="4" fill="#B9BDC4" />
        </g>
      </svg>
    )
  if (kind === 'magazine')
    return (
      <svg {...common}>
        <rect x="124" y="36" width="152" height="204" rx="3" fill="#fff" />
        <rect x="124" y="36" width="8" height="204" fill="#15171A" opacity=".15" />
        <rect x="144" y="54" width="112" height="14" fill="#15171A" />
        <rect x="144" y="78" width="112" height="86" fill={ink} />
        <circle cx="214" cy="120" r="24" fill="#fff" opacity=".85" />
        <rect x="144" y="178" width="84" height="6" fill="#15171A" />
        <rect x="144" y="192" width="112" height="4" fill="#B9BDC4" />
        <rect x="144" y="202" width="96" height="4" fill="#B9BDC4" />
      </svg>
    )
  if (kind === 'banner')
    return (
      <svg {...common}>
        <rect x="40" y="70" width="320" height="130" rx="3" fill="#fff" />
        <rect x="40" y="70" width="320" height="130" rx="3" fill="none" stroke="#15171A" strokeOpacity=".15" />
        <rect x="62" y="92" width="130" height="86" fill={ink} />
        <rect x="212" y="96" width="120" height="12" fill="#15171A" />
        <rect x="212" y="120" width="92" height="6" fill="#B9BDC4" />
        <rect x="212" y="134" width="108" height="6" fill="#B9BDC4" />
        <rect x="212" y="156" width="52" height="14" rx="7" fill={ink} />
        <circle cx="50" cy="80" r="3" fill="#15171A" />
        <circle cx="350" cy="80" r="3" fill="#15171A" />
        <circle cx="50" cy="190" r="3" fill="#15171A" />
        <circle cx="350" cy="190" r="3" fill="#15171A" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M262 100h22a30 30 0 0 1 0 60h-22" fill="none" stroke="#fff" strokeWidth="16" />
      <rect x="128" y="70" width="140" height="150" rx="12" fill="#fff" />
      <circle cx="198" cy="140" r="34" fill={ink} />
      <circle cx="198" cy="140" r="14" fill="#fff" />
      <rect x="118" y="226" width="160" height="5" rx="2.5" fill="#15171A" opacity=".12" />
    </svg>
  )
}

export default function App() {
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const works = WORKS.filter((w) => filter === 'All' || w.cat === filter)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    if (!menuOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const text = [
      'Hi Lakshya Advertise, I would like a quote.',
      `Name: ${f.get('name') || '-'}`,
      `Phone: ${f.get('phone') || '-'}`,
      `Need: ${f.get('type')}`,
      `Details: ${f.get('details') || '-'}`,
    ].join('\n')
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <div className="page">
      <header className="header">
        <div className="wrap nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 68, gap: 12 }}>
          <a href="#top" aria-label="Lakshya Advertise home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Logo />
            <span className="brand-name" style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: '-.01em' }}>
              Lakshya Advertise
            </span>
          </a>
          <nav className="nav-links" aria-label="Main" style={{ display: 'flex', gap: 4 }}>
            {NAV.map((n) => (
              <a key={n.href} className="lnk" href={n.href}>{n.label}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a className="btn primary hdr-call" href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`} style={{ minHeight: 44, padding: '0 18px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <span className="phone-txt">{PHONE_DISPLAY}</span>
            </a>
            <button type="button" className="burger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu" aria-expanded={menuOpen}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <button type="button" className={`scrim${menuOpen ? ' open' : ''}`} onClick={closeMenu} aria-label="Close menu" tabIndex={-1} />
      <nav className={`drawer${menuOpen ? ' open' : ''}`} aria-label="Mobile">
        <button type="button" className="dclose" onClick={closeMenu} aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {NAV.map((n, i) => (
          <a key={n.href} className="dl" style={{ '--i': i }} href={n.href} onClick={closeMenu}>
            <span>{n.label}</span>
            <span aria-hidden="true" style={{ color: '#8A8F98', fontSize: 18 }}>↗</span>
          </a>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a className="btn primary" href={PHONE_TEL} onClick={closeMenu}>Call {PHONE_DISPLAY}</a>
          <a className="btn" href={WHATSAPP} onClick={closeMenu}>Chat on WhatsApp</a>
          <p style={{ margin: '8px 0 0', fontSize: 13, color: '#5B6068' }}>Okhla, Delhi · Printing since 2009</p>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="wrap" style={{ paddingTop: 80, paddingBottom: 56 }}>
          <div className="in" style={{ '--d': 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 12px', fontSize: 14, fontWeight: 500, color: '#5B6068' }}>
            <span style={{ display: 'inline-flex', gap: 4 }} aria-hidden="true">
              {['#2EA3D6', '#E0397F', '#F4C531', '#15171A'].map((c) => (
                <i key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
            </span>
            <span>Offset &amp; digital printing · Okhla, Delhi · Since 2009</span>
          </div>
          <h1 className="hero-h in" style={{ '--d': 1 }}>
            Printing ideas,<br />building <span style={{ color: 'var(--accent)' }}>brands.</span>
          </h1>
          <p className="lead in" style={{ '--d': 2, fontSize: 20, maxWidth: 560, color: '#4A4F57', margin: '28px 0 0' }}>
            Better quality, better service and faster turnaround. Posters, flyers, magazines, mugs and digital prints, made in our own press room.
          </p>
          <div className="ctas in" style={{ '--d': 3, display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
            <a className="btn primary" href="#contact">Get a quote</a>
            <a className="btn" href="#work">See our work</a>
          </div>
        </section>

        <section className="wrap" style={{ paddingBottom: 56 }}>
          <div className="band">
            <img src="/images/hero-press-team.jpg" alt="Two press operators reviewing a printed sheet beside an offset press" style={{ objectPosition: 'center 45%' }} />
          </div>
        </section>

        {/* Stats */}
        <section className="wrap" style={{ paddingBottom: 80 }}>
          <div className="grid4" style={{ borderTop: '1.5px solid #15171A', paddingTop: 28, rowGap: 28 }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat">{s.value}</div>
                <div style={{ color: '#5B6068', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Press room */}
        <section className="wrap" style={{ paddingBottom: 96 }}>
          <div style={{ marginBottom: 28 }}>
            <p className="eyebrow">Our press room</p>
            <h2 className="h2">Printed in-house, checked by hand</h2>
          </div>
          <div className="photos">
            <div className="wide"><img src="/images/press-hands.jpg" alt="Two team members handling large printed sheets at the press table" loading="lazy" /></div>
            <div className="sq"><img src="/images/press-heidelberg.jpg" alt="Heidelberg offset press with control panel and mesh guard" loading="lazy" /></div>
            <div className="sq"><img src="/images/press-rollers.jpg" alt="Ink rollers inside an offset press lit by a warm lamp" loading="lazy" /></div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="wrap sec" style={{ paddingTop: 0 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 28 }}>
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="h2">Recent print jobs</h2>
            </div>
            <div className="chips" role="group" aria-label="Filter work">
              {CATEGORIES.map((c) => (
                <button key={c} type="button" className={`chip${filter === c ? ' on' : ''}`} aria-pressed={filter === c} onClick={() => setFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="grid4" style={{ rowGap: 28 }}>
            {works.map((w) => (
              <div className="tile" key={w.title}>
                <div className="art" style={{ background: w.tone }} role="img" aria-label={`${w.title} illustration`}>
                  <WorkArt kind={w.kind} ink={w.ink} />
                </div>
                <div>
                  <div className="tile-title" style={{ fontWeight: 700, fontSize: 17 }}>{w.title}</div>
                  <div style={{ color: '#5B6068', fontSize: 14 }}>{w.cat}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ margin: '24px 0 0', fontSize: 13, color: '#5B6068' }}>Illustrations shown. Real job photos can replace them.</p>
        </section>

        {/* Services */}
        <section id="services" className="sec" style={{ background: '#15171A', color: '#fff' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ color: '#FF8C73' }}>What we print</p>
            <h2 className="h2" style={{ marginBottom: 40 }}>Services</h2>
            <div style={{ borderBottom: '1px solid #2B2E34' }}>
              {SERVICES.map(([title, text], i) => (
                <a key={title} className="svc" href="#contact">
                  <span style={{ color: '#8A8F98' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="wrap sec">
          <div style={{ marginBottom: 40 }}>
            <p className="eyebrow">How it works</p>
            <h2 className="h2">From brief to doorstep</h2>
          </div>
          <div className="grid4" style={{ rowGap: 28 }}>
            {STEPS.map(([title, text], i) => (
              <div key={title} style={{ borderTop: '1.5px solid #15171A', paddingTop: 20 }}>
                <div style={{ fontWeight: 700, color: 'var(--accent)' }}>{i + 1}</div>
                <h3 style={{ margin: '6px 0 8px', fontSize: 20 }}>{title}</h3>
                <p style={{ margin: 0, color: '#4A4F57' }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="sec" style={{ background: '#F1EFE9' }}>
          <div className="wrap">
            <p className="eyebrow">Monthly plans</p>
            <h2 className="h2" style={{ marginBottom: 36, maxWidth: 700 }}>Choose the right package for your business</h2>
            <div className="grid3">
              {PLANS.map((p) => (
                <div key={p.name} className="plan" style={p.featured ? { border: '2px solid var(--accent)' } : undefined}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>{p.name}</span>
                    {p.featured && <span style={{ color: 'var(--accent)', fontSize: 13 }}>Most chosen</span>}
                  </div>
                  <div>
                    <span className="price">{p.price}</span>
                    <span style={{ color: '#5B6068' }}> / month</span>
                  </div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                    {FEATURES.map((f, i) => (
                      <li key={f} style={p.features[i] ? undefined : { color: '#8A8F98' }}>{p.features[i] ? '✓' : '–'} {f}</li>
                    ))}
                  </ul>
                  <a className={`btn${p.featured ? ' primary' : ''}`} href="#contact">Choose {p.name}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="wrap sec">
          <div className="grid2">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="h2" style={{ marginBottom: 20 }}>Tell us what you need printed</h2>
              <p style={{ color: '#4A4F57', margin: '0 0 28px', maxWidth: 440 }}>
                Send a few details and we will come back with a quote. For anything urgent, call or message us directly.
              </p>
              <div className="ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a className="btn primary" href={WHATSAPP}>Chat on WhatsApp</a>
                <a className="btn" href={PHONE_TEL}>Call {PHONE_DISPLAY}</a>
              </div>
              <p style={{ color: '#5B6068', margin: '28px 0 0' }}>
                Okhla, Delhi<br />[Full street address]<br />[Opening hours]
              </p>
            </div>
            <form className="formcard" onSubmit={onSubmit}>
              <label className="field">Your name<input type="text" name="name" autoComplete="name" /></label>
              <label className="field">Phone<input type="tel" name="phone" autoComplete="tel" /></label>
              <label className="field">What do you need?
                <select name="type">
                  <option>Poster / flyer</option>
                  <option>Magazine / journal</option>
                  <option>Digital printing</option>
                  <option>Mug printing</option>
                  <option>Branding</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="field">Details and quantity<textarea name="details" rows={4} /></label>
              <button type="submit" className="btn primary" style={{ width: '100%' }}>Request a quote</button>
            </form>
          </div>
        </section>
      </main>

      <footer style={{ background: '#15171A', color: '#B4B8BF', padding: '40px 0 96px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px 16px', fontSize: 14 }}>
          <span style={{ color: '#fff', fontWeight: 700 }}>Lakshya Advertise</span>
          <span>Printing ideas, building brands · Since 2009 · Okhla, Delhi</span>
        </div>
      </footer>

      <a className="wa wa-fab" href={WHATSAPP} aria-label="Chat on WhatsApp">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={WHATSAPP_PATH} />
        </svg>
      </a>
    </div>
  )
}
