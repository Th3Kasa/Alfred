import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

function FeatureCard({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="bg-[#212121] rounded-2xl overflow-hidden flex flex-col"
    >
      {children}
    </motion.div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
      <span className="text-gray-400 text-xs sm:text-sm">{text}</span>
    </div>
  )
}

function AuditLink() {
  return (
    <a href="#free-audit" className="flex items-center gap-1 text-primary text-xs sm:text-sm mt-4 group">
      Get free audit
      <ArrowRight
        className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ transform: 'rotate(-45deg)' }}
      />
    </a>
  )
}

export function Features() {
  return (
    <section id="services" className="relative min-h-screen bg-black py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <WordsPullUpMultiStyle
            segments={[{ text: 'Everything Google needs to rank you first.', className: 'text-primary' }]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2"
          />
          <WordsPullUpMultiStyle
            segments={[{ text: 'Done for you. No technical knowledge needed.', className: 'text-gray-500' }]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Card 1 — Video + stat */}
          <FeatureCard index={0}>
            <div className="relative flex-1 min-h-[280px] lg:min-h-0">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[#E1E0CC]/50 text-[10px] uppercase tracking-widest mb-1">Client result</p>
                <p className="text-[#E1E0CC] text-sm sm:text-base font-medium leading-tight">
                  +312% profile views.<br />Ranked #1 in 60 days.
                </p>
              </div>
            </div>
          </FeatureCard>

          {/* Card 2 — Google Listing */}
          <FeatureCard index={1}>
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <p className="text-gray-500 text-[10px] mb-1">01</p>
                <h3 className="text-primary font-medium text-base sm:text-lg mb-4">
                  Google Listing Setup.
                </h3>
                <div className="flex flex-col gap-2">
                  <CheckItem text="Profile fully optimised for local ranking" />
                  <CheckItem text="Right photos, details, and categories" />
                  <CheckItem text="Monthly updates to keep you ahead" />
                  <CheckItem text="Outrank your top competitors" />
                </div>
              </div>
              <AuditLink />
            </div>
          </FeatureCard>

          {/* Card 3 — Reviews */}
          <FeatureCard index={2}>
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <p className="text-gray-500 text-[10px] mb-1">02</p>
                <h3 className="text-primary font-medium text-base sm:text-lg mb-4">
                  5-Star Review System.
                </h3>
                <div className="flex flex-col gap-2">
                  <CheckItem text="Automated review request system" />
                  <CheckItem text="Happy customers ask at the right moment" />
                  <CheckItem text="More reviews = Google trusts you more" />
                  <CheckItem text="More calls, more bookings" />
                </div>
              </div>
              <AuditLink />
            </div>
          </FeatureCard>

          {/* Card 4 — Directories */}
          <FeatureCard index={3}>
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <p className="text-gray-500 text-[10px] mb-1">03</p>
                <h3 className="text-primary font-medium text-base sm:text-lg mb-4">
                  50+ Directory Listings.
                </h3>
                <div className="flex flex-col gap-2">
                  <CheckItem text="True Local, Yellow Pages, Yelp & more" />
                  <CheckItem text="50+ Australian directories covered" />
                  <CheckItem text="Consistent info = higher Google trust" />
                  <CheckItem text="Plain-English monthly reports" />
                </div>
              </div>
              <AuditLink />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
