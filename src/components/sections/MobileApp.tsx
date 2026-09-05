import { Reveal } from '../Reveal'
import { PhoneMockup } from '../mockups/PhoneMockup'

export function MobileApp() {
  return (
    <section className="py-28 px-6 bg-[var(--ink)] text-white overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <span className="inline-block rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/70 mb-6">
                Coming soon
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Your HR department, in your pocket.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                HR doesn&apos;t stop when you leave the office. The ELMIS mobile app puts leave requests, balances
                and notifications in every employee&apos;s hands.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="space-y-3 text-sm text-white/70">
                {['Check leave balance instantly', 'Apply for leave on the go', 'Track approval status', 'Receive HR notifications'].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[16px]" style={{ color: 'var(--green)' }}>
                        check_circle
                      </span>
                      {f}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>

          <Reveal scale delay={120} className="flex justify-center gap-4 overflow-x-auto no-scrollbar py-4">
            <div className="float-slow"><PhoneMockup screen="dashboard" /></div>
            <div className="float-slower hidden sm:block"><PhoneMockup screen="balance" /></div>
            <div className="float-slow hidden lg:block"><PhoneMockup screen="apply" /></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
