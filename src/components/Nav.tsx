import { useEffect, useState } from 'react'

const LINKS = ['Platform', 'Features', 'Solutions', 'Resources', 'Pricing', 'About']

export function Nav() {
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        compact ? 'py-3 bg-white/85 backdrop-blur-md border-b border-[var(--line)]' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2 font-semibold text-[var(--ink)]" aria-label="ELMIS home">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-sm font-bold"
            style={{ background: 'var(--ink)' }}
          >
            E
          </span>
          <span className="text-lg tracking-tight">ELMIS</span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium text-[var(--muted)]">
          {LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-[var(--ink)] transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#signin" className="text-sm font-medium text-[var(--ink)] hover:text-[var(--blue)] transition-colors">
            Sign In
          </a>
          <a
            href="#platform"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ background: 'var(--ink)' }}
          >
            Explore ELMIS
          </a>
        </div>

        <button
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full border border-[var(--line)]"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-[22px]">{open ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mx-6 mt-3 rounded-2xl border border-[var(--line)] bg-white shadow-xl p-6">
          <ul className="flex flex-col gap-4 text-base font-medium text-[var(--ink)]">
            {LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#signin" className="text-sm font-medium text-center py-2.5">
              Sign In
            </a>
            <a
              href="#platform"
              className="rounded-full px-5 py-3 text-sm font-semibold text-white text-center"
              style={{ background: 'var(--ink)' }}
              onClick={() => setOpen(false)}
            >
              Explore ELMIS
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
