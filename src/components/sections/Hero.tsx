import { Reveal } from '../Reveal'
import { DashboardMockup } from '../mockups/DashboardMockup'

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-1.5 text-xs font-medium text-[var(--muted)] mb-8">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--green)' }} />
            Now building the future of HR technology
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Modern HR.
            <br />
            <span style={{ color: 'var(--blue)' }}>Simplified.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-lg text-[var(--muted)] max-w-xl mx-auto mb-10">
            From employee records to leave, reports and workforce intelligence — ELMIS brings the whole HR
            department into one intelligent system.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#platform"
              className="rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] w-full sm:w-auto text-center"
              style={{ background: 'var(--ink)' }}
            >
              Explore ELMIS
            </a>
            <a
              href="#showcase"
              className="rounded-full px-7 py-3.5 text-sm font-semibold border border-[var(--line)] transition-colors hover:border-[var(--ink)] w-full sm:w-auto text-center"
            >
              See how it works
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal scale delay={320} className="mx-auto max-w-5xl mt-16">
        <div className="float-slow">
          <DashboardMockup />
        </div>
      </Reveal>
    </section>
  )
}
