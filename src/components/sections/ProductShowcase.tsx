import { useState } from 'react'
import { Reveal } from '../Reveal'
import { DashboardMockup } from '../mockups/DashboardMockup'
import { EmployeeDirectoryMockup } from '../mockups/EmployeeDirectoryMockup'
import { LeaveManagementMockup } from '../mockups/LeaveManagementMockup'
import { LeaveCalendarMockup } from '../mockups/LeaveCalendarMockup'
import { ReportsMockup } from '../mockups/ReportsMockup'

const TABS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'directory', label: 'Employee Directory' },
  { id: 'leave', label: 'Leave Management' },
  { id: 'calendar', label: 'Leave Calendar' },
  { id: 'reports', label: 'Reports' },
] as const

export function ProductShowcase() {
  const [active, setActive] = useState<(typeof TABS)[number]['id']>('dashboard')

  return (
    <section id="showcase" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
            One system
          </p>
        </Reveal>
        <Reveal delay={80} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">HR, finally in one place.</h2>
        </Reveal>

        <Reveal delay={140} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === tab.id ? 'text-white' : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
              style={{ background: active === tab.id ? 'var(--ink)' : 'transparent', border: active === tab.id ? 'none' : '1px solid var(--line)' }}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <Reveal scale delay={80}>
          {active === 'dashboard' && <DashboardMockup />}
          {active === 'directory' && <EmployeeDirectoryMockup />}
          {active === 'leave' && <LeaveManagementMockup />}
          {active === 'calendar' && <LeaveCalendarMockup />}
          {active === 'reports' && <ReportsMockup />}
        </Reveal>
      </div>
    </section>
  )
}
