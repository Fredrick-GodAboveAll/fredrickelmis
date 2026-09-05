import { Reveal } from '../Reveal'

const VALUES = ['Integrity', 'Service', 'Excellence', 'Stewardship', 'People First']

export function Values() {
  return (
    <section className="py-24 px-6 bg-[var(--mist)]">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Technology with purpose.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[var(--muted)] italic mb-2">
            &ldquo;Whatever you do, work at it with all your heart.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-xs text-[var(--muted)] uppercase tracking-wide mb-10">Colossians 3:23</p>
        </Reveal>
        <Reveal delay={200} className="flex flex-wrap items-center justify-center gap-3">
          {VALUES.map((v) => (
            <span key={v} className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-medium text-[var(--ink)]">
              {v}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
