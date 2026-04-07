'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import ProblemSolution from '@/components/ProblemSolution'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import ForPlatforms from '@/components/ForPlatforms'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <ForPlatforms />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
