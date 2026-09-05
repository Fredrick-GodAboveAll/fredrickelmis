const LINKS = ['Platform', 'Features', 'Pricing', 'Resources', 'About', 'Contact', 'Privacy', 'Terms']
const SOCIALS = ['public', 'mail', 'share']

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-sm font-bold"
                style={{ background: 'var(--ink)' }}
              >
                E
              </span>
              <span className="text-lg font-semibold tracking-tight text-[var(--ink)]">ELMIS</span>
            </div>
            <p className="text-sm text-[var(--muted)] max-w-xs">Employee &amp; Leave Management Information System.</p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3 text-sm text-[var(--muted)]">
            {LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-[var(--ink)] transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--line)]">
          <p className="text-xs text-[var(--muted)] text-center sm:text-left">
            © 2026 ELMIS. All rights reserved. Built by Fredrick.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
