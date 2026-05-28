import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experiences from './components/Experiences'
import Launches from './components/Launches'
import Gallery from './components/Gallery'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Launches />
      <Gallery />
      <CTAFinal />
      <Footer />
    </div>
  )
}
