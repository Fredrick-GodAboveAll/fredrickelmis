import { Reveal } from '../Reveal'

const STAGES = [
  { icon: 'person_search', label: 'Recruit' },
  { icon: 'how_to_reg', label: 'Onboard' },
  { icon: 'manage_accounts', label: 'Manage' },
  { icon: 'trending_up', label: 'Develop' },
  { icon: 'flight_takeoff', label: 'Leave' },
  { icon: 'sync_alt', label: 'Transfer' },
  { icon: 'logout', label: 'Exit' },
]

export function Lifecycle() {
  return (
    <section className="py-28 px-6 bg-[var(--mist)]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
            Beyond leave management
          </p>
        </Reveal>
        <Reveal delay={80} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">The complete employee journey.</h2>
        </Reveal>

        <div className="relative flex flex-wrap lg:flex-nowrap items-center justify-center gap-3">
          {STAGES.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="flex items-center">
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--line)] bg-white px-5 py-6 w-32">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: 'var(--ink)', color: 'white' }}
                >
                  <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                </div>
                <p className="text-xs font-semibold text-[var(--ink)]">{s.label}</p>
              </div>
              {i < STAGES.length - 1 && (
                <span className="material-symbols-outlined text-[18px] text-[var(--muted)] mx-1 hidden lg:inline">
                  arrow_forward
                </span>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="text-center mt-12">
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            ELMIS starts with employee records and leave management, built to grow into a complete employee
            lifecycle platform.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
