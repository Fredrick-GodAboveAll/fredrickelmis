import { Reveal } from '../Reveal'

const CONTEXTS = [
  { icon: 'account_balance', label: 'Public Sector' },
  { icon: 'domain', label: 'Private Organizations' },
  { icon: 'storefront', label: 'SMEs' },
  { icon: 'trending_up', label: 'Growing Enterprises' },
]

export function AfricaSection() {
  return (
    <section id="solutions" className="py-28 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--blue)' }}>
            Designed with Africa in mind
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Built for the way HR actually works.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-[var(--muted)] max-w-2xl mx-auto mb-16 leading-relaxed">
            ELMIS is shaped by HR practice in Kenya and adapts to your organization&apos;s own policies, leave
            structures and workflows — whether you operate in the public sector or a private enterprise.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CONTEXTS.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <div className="rounded-2xl border border-[var(--line)] p-6 h-full">
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: '#eaf0ff', color: 'var(--blue)' }}
                >
                  <span className="material-symbols-outlined text-[22px]">{c.icon}</span>
                </div>
                <p className="text-sm font-medium text-[var(--ink)]">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
