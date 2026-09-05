const LEAVE_RECORDS = [
  { type: 'Annual Leave', opening: 30, taken: 12, remaining: 18, start: '04 Aug 2026', end: '18 Aug 2026', status: 'Approved' },
  { type: 'Sick Leave', opening: 14, taken: 3, remaining: 11, start: '21 Jul 2026', end: '23 Jul 2026', status: 'Approved' },
  { type: 'Maternity Leave', opening: 90, taken: 60, remaining: 30, start: '02 Jun 2026', end: '—', status: 'Ongoing' },
  { type: 'Compassionate Leave', opening: 7, taken: 2, remaining: 5, start: '30 Apr 2026', end: '02 May 2026', status: 'Approved' },
  { type: 'Study Leave', opening: 10, taken: 0, remaining: 10, start: '—', end: '—', status: 'Pending' },
]

export function LeaveManagementMockup() {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)] bg-[var(--mist)]">
        <p className="text-sm font-semibold text-[var(--ink)]">Leave Management</p>
        <span className="text-xs text-[var(--muted)]">Grace Wanjiru · EMP-1042</span>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left text-xs min-w-[640px]">
          <thead>
            <tr className="text-[var(--muted)] border-b border-[var(--line)]">
              {['Leave Type', 'Opening Balance', 'Days Taken', 'Remaining', 'Start Date', 'End Date', 'Status'].map((h) => (
                <th key={h} className="py-3 px-4 font-medium whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LEAVE_RECORDS.map((r) => (
              <tr key={r.type} className="border-b border-[var(--line)] last:border-0">
                <td className="py-3 px-4 font-medium text-[var(--ink)] whitespace-nowrap">{r.type}</td>
                <td className="py-3 px-4 text-[var(--muted)]">{r.opening}</td>
                <td className="py-3 px-4 text-[var(--muted)]">{r.taken}</td>
                <td className="py-3 px-4 font-semibold text-[var(--ink)]">{r.remaining}</td>
                <td className="py-3 px-4 text-[var(--muted)] whitespace-nowrap">{r.start}</td>
                <td className="py-3 px-4 text-[var(--muted)] whitespace-nowrap">{r.end}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      background: r.status === 'Approved' ? '#e9f8f1' : r.status === 'Ongoing' ? '#eaf0ff' : '#f3f0e6',
                      color: r.status === 'Approved' ? 'var(--green)' : r.status === 'Ongoing' ? 'var(--blue)' : '#8a6d1f',
                    }}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
