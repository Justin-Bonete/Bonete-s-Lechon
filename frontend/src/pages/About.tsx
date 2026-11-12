import Reveal from '../components/Reveal'
import { usePageTitle } from '../hooks/usePageTitle'
import { site } from '../content/site'

export default function About() {
  usePageTitle('About')
  const { story, mission, vision, values } = site.about

  return (
    <>
      <section className="bg-leaf-dark text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand/80">About us</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
              Good food starts long before the fire.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <h2 className="font-display text-3xl font-bold text-leaf-dark">Our story</h2>
          <div className="mt-5 space-y-4 text-lg text-ink/85">
            {story.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 md:col-span-2">
          <div className="rounded-2xl border border-leaf/15 bg-white p-6">
            <h2 className="font-display text-xl font-bold text-leaf-dark">Mission</h2>
            <p className="mt-2 text-ink/80">{mission}</p>
          </div>
          <div className="rounded-2xl border border-leaf/15 bg-white p-6">
            <h2 className="font-display text-xl font-bold text-leaf-dark">Vision</h2>
            <p className="mt-2 text-ink/80">{vision}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold text-leaf-dark">What guides us</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={i * 0.1}>
                  <div className="border-t-4 border-ember pt-5">
                    <h3 className="font-display text-xl font-bold text-leaf-dark">{v.title}</h3>
                    <p className="mt-2 text-ink/80">{v.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
