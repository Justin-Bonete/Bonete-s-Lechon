import { Link } from 'react-router-dom'
import Logo from './Logo'
import ContactList from './ContactList'
import { navLinks } from './Header'
import { site } from '../content/site'

export default function Footer() {
  return (
    <footer className="bg-leaf-dark text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/80">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-cream/70">Explore</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/90 underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-cream/70">Contact</h2>
          <div className="mt-4 text-cream/90">
            <ContactList />
            {Object.values(site.contact).every((v) => v.trim() === '') && (
              <p className="text-sm text-cream/80">Contact details coming soon.</p>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/70">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
