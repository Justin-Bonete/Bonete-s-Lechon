import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ContactList from '../components/ContactList'
import { usePageTitle } from '../hooks/usePageTitle'
import { site } from '../content/site'

const btnPrimary =
  'inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ember/90'
const btnGhost =
  'inline-flex items-center justify-center rounded-full border border-cream/60 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10'

const pillars = [
  { title: 'Raised with care', text: 'Clean housing, regular feeding and daily observation for every batch.' },
  { title: 'Traceable origins', text: 'We keep records of where our animals come from and how they are raised.' },
  { title: 'Made to order', text: 'Lechon is prepared for your date, so it reaches your table fresh.' },
]

export default function Home() {
  usePageTitle()
  const hasContact = Object.values(site.contact).some((v) => v.trim() !== '')

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-leaf-dark text-cream">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-ember/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-leaf/60 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand/80">Pigs &middot; Chickens &middot; Lechon</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Raised with care.
              <br />
              <span className="text-sand">Roasted to celebrate.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-cream/85">
              Live pigs and chickens, plus lechon baboy and lechon manok made to order for your fiesta, wedding or family table.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-3">
            <a href="#offerings" className={btnPrimary}>See what we offer</a>
            <Link to="/practices" className={btnGhost}>How we raise our animals</Link>
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-leaf-dark md:text-4xl">What we offer</h2>
          <p className="mt-3 max-w-2xl text-ink/80">Four things, done properly. Online ordering opens in a later release; for now, reach out to reserve.</p>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.offerings.map((o, i) => (
            <li key={o.id}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="h-full rounded-2xl border border-leaf/15 bg-white p-6 shadow-sm">
                  <div aria-hidden="true" className="text-4xl">{o.icon}</div>
                  <h3 className="mt-4 font-display text-xl font-bold text-leaf-dark">{o.title}</h3>
                  <p className="mt-2 text-sm text-ink/80">{o.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured lechon */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">Featured</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-leaf-dark md:text-4xl">Lechon, prepared for your date</h2>
            <p className="mt-4 text-ink/85">
              Lechon baboy and lechon manok are made to order. Reserve ahead so we can plan the preparation for your event, and tell us the size or weight you need.
            </p>
            <Link to="/practices" className="mt-6 inline-block font-semibold text-leaf underline underline-offset-4 hover:text-leaf-dark">
              Read about our farming practices
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-leaf-dark p-8 text-cream">
              <h3 className="font-display text-xl font-bold">How reservations work</h3>
              <ol className="mt-5 space-y-4">
                {['Tell us your date and what you need.', 'We confirm availability and pricing with you.', 'We prepare your lechon for pickup or delivery.'].map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember font-semibold">{i + 1}</span>
                    <span className="pt-1">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-leaf-dark md:text-4xl">The farm, in three promises</h2>
        </Reveal>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.1}>
                <div className="border-t-4 border-ember pt-5">
                  <h3 className="font-display text-xl font-bold text-leaf-dark">{p.title}</h3>
                  <p className="mt-2 text-ink/80">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials: hidden until real ones are added */}
      {site.testimonials.length > 0 && (
        <section className="bg-sand">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="font-display text-3xl font-bold text-leaf-dark md:text-4xl">What customers say</h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {site.testimonials.map((t) => (
                <li key={t.author}>
                  <figure className="h-full rounded-2xl bg-white p-6 shadow-sm">
                    <blockquote className="text-ink/90">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-4 text-sm font-semibold text-leaf-dark">{t.author}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Call to action */}
      <section className="bg-ember text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Planning a celebration?</h2>
            <p className="mx-auto mt-3 max-w-xl text-cream/90">
              {hasContact ? 'Get in touch to reserve your lechon or ask about our livestock.' : 'Online ordering and contact details are coming soon. Please check back.'}
            </p>
            {hasContact && <ContactList className="mx-auto mt-6 max-w-sm text-left" />}
          </Reveal>
        </div>
      </section>
    </>
  )
}
