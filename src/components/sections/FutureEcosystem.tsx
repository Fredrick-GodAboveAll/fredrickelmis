import { Reveal } from '../Reveal'

const MODULES = [
  { icon: 'badge', title: 'Employee Management', desc: 'Central employee records.', status: 'available' },
  { icon: 'flight_takeoff', title: 'Leave Management', desc: 'Balances, policies, applications and calendars.', status: 'available' },
  { icon: 'fingerprint', title: 'Attendance', desc: 'Attendance and workforce time management.', status: 'soon' },
  { icon: 'person_search', title: 'Recruitment', desc: 'Vacancies, applicants and hiring workflows.', status: 'soon' },
  { icon: 'insights', title: 'Performance', desc: 'Goals, KPIs, appraisals and development.', status: 'soon' },
  { icon: 'payments', title: 'Payroll', desc: 'Salary structures, deductions and payroll workflows.', status: 'soon' },
  { icon: 'description', title: 'HR Documents', desc: 'Letters, forms, records and document generation.', status: 'available' },
  { icon: 'bar_chart', title: 'Reports & Analytics', desc: 'Workforce intelligence.', status: 'available' },
  { icon: 'smartphone', title: 'Employee Self-Service', desc: 'Employees access their HR information themselves.', status: 'soon' },
]

export function FutureEcosystem() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
            The ELMIS ecosystem
          </p>
        </Reveal>
        <Reveal delay={80} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">This is only the beginning.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 100}>
              <div className="rounded-2xl border border-[var(--line)] p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="material-symbols-outlined text-[20px] flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: '#eaf0ff', color: 'var(--blue)' }}
                  >
                    {m.icon}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
                    style={{
                      background: m.status === 'available' ? '#e9f8f1' : '#f3f0e6',
                      color: m.status === 'available' ? 'var(--green)' : '#8a6d1f',
                    }}
                  >
                    {m.status === 'available' ? 'Available Now' : 'Coming Soon'}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--ink)] mb-1.5">{m.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
