import { Reveal } from '../Reveal'

const CATEGORIES = [
  { icon: 'menu_book', title: 'HR Guides', desc: 'Practical HR knowledge.' },
  { icon: 'flight_takeoff', title: 'Leave Management', desc: 'Leave policies, calculations and best practices.' },
  { icon: 'description', title: 'HR Templates', desc: 'Letters, forms and HR documents.' },
  { icon: 'memory', title: 'HR Technology', desc: 'Modernizing HR operations.' },
  { icon: 'campaign', title: 'ELMIS Updates', desc: 'Product announcements.' },
  { icon: 'help', title: 'Knowledge Base', desc: 'How-to guides.' },
]

export function Resources() {
  return (
    <section id="resources" className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
            Resources
          </p>
        </Reveal>
        <Reveal delay={80} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Knowledge for modern HR teams.</h2>
        </Reveal>

        <div className="divide-y divide-[var(--line)]">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <a href="#" className="flex items-center gap-5 py-6 group">
                <span
                  className="material-symbols-outlined text-[20px] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: '#eaf0ff', color: 'var(--blue)' }}
                >
                  {c.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[var(--ink)]">{c.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{c.desc}</p>
                </div>
                <span className="material-symbols-outlined text-[18px] text-[var(--muted)] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
