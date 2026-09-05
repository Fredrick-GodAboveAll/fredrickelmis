import { Reveal } from '../Reveal'

const TIERS = [
  {
    name: 'Starter',
    tagline: 'For small organizations',
    features: ['Employee records', 'Leave management', 'Basic reports'],
    price: 'Contact us',
  },
  {
    name: 'Professional',
    tagline: 'For growing HR teams',
    features: ['Everything in Starter', 'Advanced reports', 'Attendance', 'HR documents', 'Analytics'],
    price: 'Contact us',
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For large organizations',
    features: ['Everything in Professional', 'Custom workflows', 'Integrations', 'Advanced permissions', 'Dedicated support'],
    price: 'Contact us',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-[var(--mist)]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
            Pricing
          </p>
        </Reveal>
        <Reveal delay={80} className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Simple plans, coming soon.</h2>
        </Reveal>
        <Reveal delay={120} className="text-center mb-16">
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Pricing is being finalized alongside the platform. Talk to us to shape the plan that fits your
            organization.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 120}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.featured ? 'text-white' : 'bg-white border border-[var(--line)]'
                }`}
                style={tier.featured ? { background: 'var(--ink)' } : undefined}
              >
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <p className={`text-sm mb-6 ${tier.featured ? 'text-white/60' : 'text-[var(--muted)]'}`}>{tier.tagline}</p>
                <p className="text-2xl font-bold mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="material-symbols-outlined text-[16px] mt-0.5"
                        style={{ color: tier.featured ? 'var(--green)' : 'var(--green)' }}
                      >
                        check
                      </span>
                      <span className={tier.featured ? 'text-white/80' : 'text-[var(--muted)]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`rounded-full py-3 text-sm font-semibold text-center transition-transform hover:scale-[1.02] ${
                    tier.featured ? 'bg-white text-[var(--ink)]' : 'text-white'
                  }`}
                  style={!tier.featured ? { background: 'var(--ink)' } : undefined}
                >
                  Talk to us
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
