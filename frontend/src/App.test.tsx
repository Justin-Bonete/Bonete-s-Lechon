import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('public website', () => {
  it('renders the home page hero', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Raised with care/i)
    expect(screen.getByRole('heading', { name: /What we offer/i })).toBeInTheDocument()
  })

  it('lists the four offerings', () => {
    renderAt('/')
    for (const name of ['Live Pigs', 'Live Chickens', 'Lechon Baboy', 'Lechon Manok']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })

  it('renders the about page', () => {
    renderAt('/about')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Good food starts/i)
    expect(screen.getByRole('heading', { name: 'Mission' })).toBeInTheDocument()
  })

  it('renders the farming practices page without inventing certifications', () => {
    renderAt('/practices')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/How we raise our animals/i)
    expect(screen.getByText(/none are listed at the moment/i)).toBeInTheDocument()
  })

  it('shows a 404 page for unknown routes', () => {
    renderAt('/does-not-exist')
    expect(screen.getByRole('heading', { name: /Page not found/i })).toBeInTheDocument()
  })

  it('toggles the mobile menu', () => {
    renderAt('/')
    const button = screen.getByRole('button', { name: /menu/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-nav')).not.toBeNull()
  })

  it('has a skip link and a main landmark', () => {
    renderAt('/')
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main')
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('hides the testimonials section while there are none', () => {
    renderAt('/')
    expect(screen.queryByRole('heading', { name: /What customers say/i })).toBeNull()
  })
})
