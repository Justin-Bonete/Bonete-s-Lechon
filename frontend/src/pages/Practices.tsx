import Reveal from '../components/Reveal'
import { usePageTitle } from '../hooks/usePageTitle'
import { site } from '../content/site'

export default function Practices() {
  usePageTitle('Farming Practices')

  return (
    <>
      <section className="bg-leaf-dark text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand/80">Farming practices</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
              How we raise our animals
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream/85">
              These are the standards we hold ourselves to. If you have a question about any of them, we are happy to answer it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <ul className="grid gap-6 md:grid-cols-2">
          {site.practices.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <article id={p.id} className="h-full rounded-2xl border border-leaf/15 bg-white p-7 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-leaf-dark">{p.title}</h2>
                  <p className="mt-3 text-ink/85">{p.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-bold text-leaf-dark">Certifications</h2>
          {site.certifications.length > 0 ? (
            <ul className="mt-5 list-disc space-y-2 pl-6 text-ink/85">
              {site.certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          ) : (
            <p className="mt-4 max-w-2xl text-ink/85">
              We only list certifications we actually hold, and none are listed at the moment. Ask us about our practices and we will tell you plainly what we do.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
