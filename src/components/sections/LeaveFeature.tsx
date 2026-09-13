import { Reveal } from '../Reveal'

const LEAVE_TYPES = ['Annual Leave', 'Sick Leave', 'Maternity Leave', 'Paternity Leave', 'Compassionate Leave', 'Study Leave']

export function LeaveFeature() {
  const allocated = 30
  const used = 12
  const remaining = allocated - used
  const pct = Math.round((used / allocated) * 100)

  return (
    <section id="features" className="py-28 px-6 bg-[var(--mist)]">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5 leading-tight">
              Leave management without the spreadsheet headache.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[var(--muted)] mb-8 leading-relaxed">
              ELMIS handles every leave type your organization needs — configured to your own policies, not a
              generic template.
            </p>
          </Reveal>

          <Reveal delay={160} className="flex flex-wrap gap-2 mb-10">
            {LEAVE_TYPES.map((t) => (
              <span key={t} className="rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--ink)]">
                {t}
              </span>
            ))}
          </Reveal>

          <Reveal delay={220}>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-5 mb-3">
              <div
                className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: '#eaf0ff', color: 'var(--blue)' }}
              >
                <span className="material-symbols-outlined text-[18px]">calculate</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--ink)] mb-1.5">Intelligent Leave Calculation</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Balances account for working days, weekends, public holidays, leave periods and financial years —
                so numbers stay accurate without manual recalculation.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal scale delay={120}>
          <div className="rounded-2xl border border-[var(--line)] bg-white p-8 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)] mb-6">Annual Leave — Grace Wanjiru</p>
            <div className="flex items-center gap-8 mb-8">
              <div className="relative h-36 w-36 shrink-0">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--mist)" strokeWidth="12" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="var(--blue)"
                    strokeWidth="12"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * (1 - pct / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--ink)]">{remaining}</span>
                  <span className="text-[10px] text-[var(--muted)]">days left</span>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--muted)]">Allocated</span>
                  <span className="font-semibold text-[var(--ink)]">{allocated} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--muted)]">Used</span>
                  <span className="font-semibold text-[var(--ink)]">{used} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--muted)]">Remaining</span>
                  <span className="font-semibold" style={{ color: 'var(--green)' }}>
                    {remaining} days
                  </span>
                </div>
              </div>
            </div>
            <div className="h-2 rounded-full bg-[var(--mist)] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'var(--blue)' }} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
