import { Reveal } from '../Reveal'

export function Founder() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
            Meet the person behind ELMIS
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start mt-10">
          <Reveal delay={80} className="flex justify-center md:justify-start">
            <div
              className="flex h-24 w-24 items-center justify-center rounded-2xl text-3xl font-bold text-white shrink-0"
              style={{ background: 'var(--ink)' }}
            >
              F
            </div>
          </Reveal>

          <div>
            <Reveal delay={120}>
              <h3 className="text-2xl font-bold text-[var(--ink)] mb-1">Fredrick</h3>
              <p className="text-sm text-[var(--muted)] mb-6">Human Resource Professional · Software Engineer</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Fredrick works at the intersection of people and technology. His experience in HR exposed him to
                repetitive administrative work, fragmented records and the challenges HR teams face every day.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-[var(--muted)] leading-relaxed mb-8">
                Instead of simply accepting those problems, he started building. ELMIS is the result —
                technology shaped by real HR experience.
              </p>
            </Reveal>
            <Reveal delay={260} className="flex items-center gap-3 text-sm font-medium text-[var(--ink)]">
              <span>HR</span>
              <span className="material-symbols-outlined text-[16px] text-[var(--muted)]">close</span>
              <span>Technology</span>
              <span className="material-symbols-outlined text-[16px] text-[var(--muted)]">close</span>
              <span>People</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
