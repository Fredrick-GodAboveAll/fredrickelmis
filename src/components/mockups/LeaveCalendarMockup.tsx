const DAYS = Array.from({ length: 30 }, (_, i) => i + 1)

const AWAY = new Set([3, 4, 5, 6, 12, 13, 14, 19, 20, 27, 28])
const HOLIDAY = new Set([9])
const RETURN = new Set([15, 21])

export function LeaveCalendarMockup() {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)] bg-[var(--mist)]">
        <p className="text-sm font-semibold text-[var(--ink)]">Leave Calendar — August 2026</p>
        <div className="flex items-center gap-4 text-[11px] text-[var(--muted)]">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: 'var(--blue)' }} /> Away</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: 'var(--green)' }} /> Return</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#c98a1f]" /> Holiday</span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-medium text-[var(--muted)] mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {DAYS.map((d) => (
            <div
              key={d}
              className={`relative aspect-square rounded-lg border text-[11px] flex items-center justify-center font-medium ${
                AWAY.has(d)
                  ? 'border-[var(--blue)]/30 bg-[#eaf0ff] text-[var(--blue)]'
                  : RETURN.has(d)
                    ? 'border-[var(--green)]/30 bg-[#e9f8f1] text-[var(--green)]'
                    : HOLIDAY.has(d)
                      ? 'border-[#c98a1f]/30 bg-[#f8f0e0] text-[#8a6d1f]'
                      : 'border-[var(--line)] text-[var(--ink)]'
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        <div className="mt-5 grid sm:grid-cols-3 gap-3 text-xs">
          <div className="rounded-xl border border-[var(--line)] p-3">
            <p className="font-semibold text-[var(--ink)]">11 employees away</p>
            <p className="text-[var(--muted)]">Across 5 departments this month</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] p-3">
            <p className="font-semibold text-[var(--ink)]">2 upcoming returns</p>
            <p className="text-[var(--muted)]">Aug 15 &amp; Aug 21</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] p-3">
            <p className="font-semibold text-[var(--ink)]">1 public holiday</p>
            <p className="text-[var(--muted)]">Aug 9 — factored into leave days</p>
          </div>
        </div>
      </div>
    </div>
  )
}
