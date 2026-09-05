import { Reveal } from '../Reveal'

export function ProblemSection() {
  const problems = [
    { icon: 'description', text: 'Employee records scattered across spreadsheets and paper files' },
    { icon: 'edit_note', text: 'Leave balances tracked manually, prone to error and dispute' },
    { icon: 'schedule', text: 'HR teams spend hours producing reports that should take minutes' },
  ]

  return (
    <section className="py-28 px-6 bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            HR shouldn&apos;t feel this complicated.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-white/60 max-w-xl mx-auto mb-16">
            Most HR teams still run on fragmented records and manual processes built for a different era.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {problems.map((p, i) => (
            <Reveal key={p.text} delay={i * 120}>
              <div className="rounded-2xl border border-white/10 p-6 h-full text-left">
                <span className="material-symbols-outlined text-[22px] text-white/70 mb-4 block">{p.icon}</span>
                <p className="text-sm text-white/70 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--blue)' }}>
            There is a better way.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
