import { site } from '../content/site'

const labels: Record<keyof typeof site.contact, string> = {
  phone: 'Phone',
  email: 'Email',
  address: 'Address',
  hours: 'Hours',
  facebook: 'Facebook',
}

/** Renders only the contact details that have been filled in. Returns null if none. */
export default function ContactList({ className = '' }: { className?: string }) {
  const entries = (Object.keys(site.contact) as (keyof typeof site.contact)[])
    .map((k) => ({ key: k, value: site.contact[k] }))
    .filter((e) => e.value.trim() !== '')

  if (entries.length === 0) return null

  return (
    <dl className={`space-y-2 ${className}`}>
      {entries.map((e) => (
        <div key={e.key} className="flex gap-3">
          <dt className="w-20 shrink-0 text-sm opacity-70">{labels[e.key]}</dt>
          <dd>{e.value}</dd>
        </div>
      ))}
    </dl>
  )
}
