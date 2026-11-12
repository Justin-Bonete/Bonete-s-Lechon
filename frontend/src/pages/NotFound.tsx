import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="mx-auto max-w-2xl px-5 py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-leaf-dark">Page not found</h1>
      <p className="mt-4 text-ink/80">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-leaf px-6 py-3 text-sm font-semibold text-cream hover:bg-leaf-dark">
        Back to home
      </Link>
    </section>
  )
}
