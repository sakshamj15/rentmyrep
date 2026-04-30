import UtilityBar from '@/components/UtilityBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <UtilityBar />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
