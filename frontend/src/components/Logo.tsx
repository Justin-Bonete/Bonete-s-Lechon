export default function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="20" fill="#3f5d3a" />
      <path
        d="M20 7c5.5 5 8.5 9.5 8.5 14.5a8.5 8.5 0 0 1-17 0c0-3.2 1.6-5.8 4.2-7.4.3 2.1 1.3 3.3 2.7 3.8C18 14.5 18.4 10.8 20 7Z"
        fill="#faf6ee"
      />
      <path d="M20 33c-2-2-3-4-3-6 2 .5 4 2 3 6Z" fill="#b5451b" />
    </svg>
  )
}
