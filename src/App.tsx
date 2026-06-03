import { Hero } from './components/Hero'
import { About } from './components/About'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Guarantee } from './components/Guarantee'
import { Industries } from './components/Industries'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Guarantee />
      <Industries />
      <Contact />
      <Footer />
    </main>
  )
}
