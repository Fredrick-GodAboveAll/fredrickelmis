import { Reveal } from '../Reveal'

const POINTS = [
  { icon: 'admin_panel_settings', title: 'Role-based access', desc: 'Every user sees only what their role allows.' },
  { icon: 'lock', title: 'Secure authentication', desc: 'Protected sign-in for every account.' },
  { icon: 'shield', title: 'Data protection', desc: 'Employee data handled with care and discretion.' },
  { icon: 'history', title: 'Auditability', desc: 'Key actions are tracked for accountability.' },
  { icon: 'key', title: 'Controlled permissions', desc: 'Granular access down to individual modules.' },
  { icon: 'backup', title: 'Backup strategy', desc: 'Records are safeguarded against loss.' },
]

export function Security() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
            Security
          </p>
        </Reveal>
        <Reveal delay={80} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">HR records deserve real protection.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <div className="rounded-2xl border border-[var(--line)] p-6 h-full">
                <span
                  className="material-symbols-outlined text-[20px] flex h-10 w-10 items-center justify-center rounded-xl mb-4"
                  style={{ background: '#eef0f4', color: 'var(--ink)' }}
                >
                  {p.icon}
                </span>
                <h3 className="text-sm font-semibold text-[var(--ink)] mb-1.5">{p.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
