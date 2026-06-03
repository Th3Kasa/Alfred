import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Navbar } from './Navbar'
import { WordsPullUp } from './WordsPullUp'

export function Hero() {
  return (
    <section className="h-screen p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <Navbar />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 grid grid-cols-12 items-end gap-4">
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
              style={{ color: '#E1E0CC' }}
            >
              <WordsPullUp text="Prisma" showAsterisk />
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start gap-4 pb-2">
            <motion.p
              className="text-primary/70 text-xs sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not
              by place, status or labels but by passion and hunger to unlock potential through our
              unique perspectives.
            </motion.p>
            <motion.button
              className="group flex items-center gap-2 bg-primary rounded-full pl-4 sm:pl-6 pr-1 py-1 hover:gap-3 transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-medium text-sm sm:text-base text-black">Join the lab</span>
              <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" style={{ color: '#E1E0CC' }} />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
