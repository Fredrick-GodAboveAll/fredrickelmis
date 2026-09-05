import { Reveal } from '../Reveal'

export function Trust() {
  return (
    <section className="py-24 px-6 bg-[var(--mist)]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Built from real HR workflows.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            ELMIS is being developed from practical, day-to-day HR experience — not designed in a boardroom. As
            organizations begin adopting the platform, this space will feature their stories, feedback and
            adoption milestones.
          </p>
        </Reveal>
        <Reveal delay={160} className="rounded-2xl border border-dashed border-[var(--line)] bg-white py-10 px-6">
          <span className="material-symbols-outlined text-[24px] text-[var(--muted)] mb-3 block">hourglass_top</span>
          <p className="text-sm text-[var(--muted)]">
            Customer stories and adoption statistics will appear here as they become available.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
