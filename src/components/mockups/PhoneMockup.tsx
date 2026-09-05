export function PhoneMockup({ screen }: { screen: 'dashboard' | 'balance' | 'apply' | 'status' }) {
  return (
    <div className="w-56 rounded-[2rem] border-[6px] border-[var(--ink)] bg-[var(--ink)] shadow-2xl overflow-hidden shrink-0">
      <div className="h-full w-full rounded-[1.6rem] bg-white overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-[var(--muted)]">
          <span>9:41</span>
          <span className="material-symbols-outlined text-[12px]">signal_cellular_alt</span>
        </div>

        {screen === 'dashboard' && (
          <div className="px-4 pb-5">
            <p className="text-[11px] text-[var(--muted)]">Welcome back</p>
            <p className="text-sm font-semibold text-[var(--ink)] mb-3">Amina Yusuf</p>
            <div className="rounded-xl p-3 mb-3" style={{ background: 'var(--ink)' }}>
              <p className="text-[10px] text-white/70">Leave Balance</p>
              <p className="text-xl font-bold text-white">18 days</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {['Attendance', 'Payslip', 'Requests', 'Directory'].map((t) => (
                <div key={t} className="rounded-lg border border-[var(--line)] p-2 text-[10px] font-medium text-[var(--ink)]">
                  {t}
                </div>
              ))}
            </div>
          </div>
        )}

        {screen === 'balance' && (
          <div className="px-4 pb-5">
            <p className="text-xs font-semibold text-[var(--ink)] mb-3">Leave Balance</p>
            {[
              { t: 'Annual Leave', v: 18, max: 30 },
              { t: 'Sick Leave', v: 11, max: 14 },
              { t: 'Compassionate', v: 5, max: 7 },
            ].map((l) => (
              <div key={l.t} className="mb-3">
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-[var(--ink)] font-medium">{l.t}</span>
                  <span className="text-[var(--muted)]">{l.v}/{l.max}</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--mist)] overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(l.v / l.max) * 100}%`, background: 'var(--blue)' }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {screen === 'apply' && (
          <div className="px-4 pb-5">
            <p className="text-xs font-semibold text-[var(--ink)] mb-3">Apply for Leave</p>
            <div className="space-y-2">
              <div className="rounded-lg border border-[var(--line)] p-2 text-[10px] text-[var(--muted)]">Leave Type — Annual Leave</div>
              <div className="rounded-lg border border-[var(--line)] p-2 text-[10px] text-[var(--muted)]">Start Date — 04 Aug 2026</div>
              <div className="rounded-lg border border-[var(--line)] p-2 text-[10px] text-[var(--muted)]">End Date — 18 Aug 2026</div>
              <div className="rounded-lg py-2 text-center text-[10px] font-semibold text-white" style={{ background: 'var(--blue)' }}>
                Submit Request
              </div>
            </div>
          </div>
        )}

        {screen === 'status' && (
          <div className="px-4 pb-5">
            <p className="text-xs font-semibold text-[var(--ink)] mb-3">Notifications</p>
            <div className="space-y-2">
              <div className="rounded-lg border border-[var(--line)] p-2">
                <p className="text-[10px] font-medium text-[var(--ink)]">Leave approved</p>
                <p className="text-[9px] text-[var(--muted)]">Your Annual Leave was approved</p>
              </div>
              <div className="rounded-lg border border-[var(--line)] p-2">
                <p className="text-[10px] font-medium text-[var(--ink)]">Return reminder</p>
                <p className="text-[9px] text-[var(--muted)]">You return to work in 3 days</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
