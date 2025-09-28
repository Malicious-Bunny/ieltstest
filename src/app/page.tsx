import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ';
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <FAQ />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
