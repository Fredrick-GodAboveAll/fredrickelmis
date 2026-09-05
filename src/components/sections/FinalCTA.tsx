import { Reveal } from '../Reveal'

export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-[var(--ink)] text-white text-center">
      <Reveal>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">Ready to rethink HR?</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="text-white/60 max-w-xl mx-auto mb-10">
          Meet ELMIS — a modern approach to managing people, processes and workforce information.
        </p>
      </Reveal>
      <Reveal delay={180} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#top"
          className="rounded-full px-8 py-3.5 text-sm font-semibold bg-white text-[var(--ink)] transition-transform hover:scale-[1.03] w-full sm:w-auto text-center"
        >
          Explore ELMIS
        </a>
        <a
          href="#contact"
          className="rounded-full px-8 py-3.5 text-sm font-semibold border border-white/25 transition-colors hover:border-white w-full sm:w-auto text-center"
        >
          Talk to us
        </a>
      </Reveal>
    </section>
  )
}
