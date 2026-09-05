export function DashboardMockup() {
  const stats = [
    { label: 'Total Employees', value: '1,284', icon: 'groups', tone: 'blue' },
    { label: 'On Leave Today', value: '37', icon: 'flight_takeoff', tone: 'green' },
    { label: 'Pending HR Tasks', value: '12', icon: 'task_alt', tone: 'ink' },
    { label: 'Upcoming Returns', value: '9', icon: 'event_upcoming', tone: 'blue' },
  ]

  const bars = [62, 78, 45, 88, 70, 95, 58, 82, 66, 74, 90, 68]

  const activity = [
    { name: 'Grace Wanjiru', action: 'applied for Annual Leave', time: '2m ago' },
    { name: 'Peter Otieno', action: 'leave request approved', time: '18m ago' },
    { name: 'HR Team', action: 'generated Q3 Leave Report', time: '1h ago' },
    { name: 'Amina Yusuf', action: 'returned from Maternity Leave', time: '3h ago' },
  ]

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white shadow-[0_40px_80px_-40px_rgba(10,15,30,0.35)] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--line)] bg-[var(--mist)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-medium text-[var(--muted)]">app.elmis.io/dashboard</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex w-16 md:w-48 flex-col gap-1 border-r border-[var(--line)] bg-white p-3">
          {[
            { icon: 'dashboard', label: 'Dashboard', active: true },
            { icon: 'badge', label: 'Employees' },
            { icon: 'flight_takeoff', label: 'Leave' },
            { icon: 'fingerprint', label: 'Attendance' },
            { icon: 'bar_chart', label: 'Reports' },
            { icon: 'description', label: 'Documents' },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium ${
                item.active ? 'bg-[var(--ink)] text-white' : 'text-[var(--muted)]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">Overview</p>
              <h3 className="text-base font-semibold text-[var(--ink)]">Good morning, HR Team</h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              Sep 2026
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-[var(--line)] p-3">
                <span
                  className="material-symbols-outlined text-[18px] mb-2 inline-flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{
                    color: s.tone === 'green' ? 'var(--green)' : s.tone === 'blue' ? 'var(--blue)' : 'var(--ink)',
                    background: s.tone === 'green' ? '#e9f8f1' : s.tone === 'blue' ? '#eaf0ff' : '#eef0f4',
                  }}
                >
                  {s.icon}
                </span>
                <p className="text-lg font-bold leading-tight text-[var(--ink)]">{s.value}</p>
                <p className="text-[11px] text-[var(--muted)]">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-xl border border-[var(--line)] p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-[var(--ink)]">Workforce Attendance</p>
                <p className="text-[11px] text-[var(--muted)]">Last 12 weeks</p>
              </div>
              <div className="flex items-end gap-2 h-28">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md"
                    style={{
                      height: `${h}%`,
                      background: i === bars.length - 3 ? 'var(--blue)' : '#dfe6f7',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--line)] p-4">
              <p className="text-xs font-semibold text-[var(--ink)] mb-3">Recent Activity</p>
              <ul className="space-y-3">
                {activity.map((a) => (
                  <li key={a.name + a.time} className="text-[11px]">
                    <p className="font-medium text-[var(--ink)]">{a.name}</p>
                    <p className="text-[var(--muted)]">
                      {a.action} · {a.time}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
