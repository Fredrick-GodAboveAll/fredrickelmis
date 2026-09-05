const REPORTS = [
  { title: 'Quarterly Leave Report', icon: 'summarize', meta: 'Q3 2026 · 1,284 employees' },
  { title: 'Leave Register', icon: 'menu_book', meta: 'Updated daily' },
  { title: 'Employee Establishment', icon: 'account_tree', meta: '18 departments' },
  { title: 'Department Statistics', icon: 'pie_chart', meta: 'Headcount by unit' },
  { title: 'Workforce Demographics', icon: 'diversity_3', meta: 'Age, tenure, gender' },
  { title: 'Leave Utilization', icon: 'trending_up', meta: '68% average uptake' },
]

export function ReportsMockup() {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)] bg-[var(--mist)]">
        <p className="text-sm font-semibold text-[var(--ink)]">Reports &amp; Analytics</p>
        <span className="text-xs text-[var(--muted)]">Auto-generated</span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          {REPORTS.map((r) => (
            <div key={r.title} className="flex items-center gap-3 rounded-xl border border-[var(--line)] p-3">
              <span
                className="material-symbols-outlined text-[18px] flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: '#eaf0ff', color: 'var(--blue)' }}
              >
                {r.icon}
              </span>
              <div>
                <p className="text-xs font-semibold text-[var(--ink)]">{r.title}</p>
                <p className="text-[11px] text-[var(--muted)]">{r.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--line)] p-4">
          <p className="text-xs font-semibold text-[var(--ink)] mb-3">Department Statistics — Headcount</p>
          <div className="space-y-2.5">
            {[
              { dept: 'Operations', pct: 92 },
              { dept: 'Human Resources', pct: 74 },
              { dept: 'Finance', pct: 61 },
              { dept: 'ICT', pct: 48 },
              { dept: 'Supply Chain', pct: 40 },
            ].map((d) => (
              <div key={d.dept} className="flex items-center gap-3">
                <span className="w-32 text-[11px] text-[var(--muted)] shrink-0">{d.dept}</span>
                <div className="flex-1 h-2 rounded-full bg-[var(--mist)] overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${d.pct}%`, background: 'var(--blue)' }} />
                </div>
                <span className="text-[11px] font-medium text-[var(--ink)] w-8 text-right">{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
