import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ProductShowcase } from '@/components/sections/ProductShowcase'
import { LeaveFeature } from '@/components/sections/LeaveFeature'
import { AfricaSection } from '@/components/sections/AfricaSection'
import { Lifecycle } from '@/components/sections/Lifecycle'
import { MobileApp } from '@/components/sections/MobileApp'
import { FutureEcosystem } from '@/components/sections/FutureEcosystem'
import { Values } from '@/components/sections/Values'
import { Founder } from '@/components/sections/Founder'
import { Trust } from '@/components/sections/Trust'
import { Security } from '@/components/sections/Security'
import { Resources } from '@/components/sections/Resources'
import { Pricing } from '@/components/sections/Pricing'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Nav />
      <main id="platform">
        <Hero />
        <ProblemSection />
        <ProductShowcase />
        <LeaveFeature />
        <AfricaSection />
        <Lifecycle />
        <MobileApp />
        <FutureEcosystem />
        <Values />
        <Founder />
        <Trust />
        <Security />
        <Resources />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
