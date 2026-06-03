import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

export function Guarantee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="guarantee" className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="relative bg-[#101010] rounded-3xl px-6 py-12 md:px-16 md:py-20 overflow-hidden">
          <div className="bg-noise absolute inset-0 opacity-[0.08] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Big number */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="font-medium leading-none tracking-[-0.07em]"
                style={{
                  fontSize: 'clamp(80px, 20vw, 200px)',
                  color: 'rgba(222,219,200,0.08)',
                  userSelect: 'none',
                }}
              >
                60
              </p>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5"
            >
              <p className="text-primary text-[10px] uppercase tracking-widest">60 Day Guarantee</p>

              <div className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                <WordsPullUpMultiStyle
                  segments={[
                    { text: 'Measurable results', className: 'text-primary font-normal' },
                    { text: 'or your next month is free.', className: 'italic font-serif text-primary/60' },
                  ]}
                  containerClassName="text-2xl sm:text-3xl md:text-4xl leading-tight"
                />
              </div>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md">
                If your Google Maps visibility doesn't measurably improve in 60 days — minimum 15-point
                profile score improvement and 50+ directory listings — your following month is on us.
                No questions asked. We work until the results are real.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-600">
                <span>✓ No lock-in beyond 2 months</span>
                <span>✓ Free audit before you commit</span>
                <span>✓ Cancel any time after month 2</span>
              </div>

              <a
                href="#free-audit"
                className="inline-flex items-center gap-2 bg-primary rounded-full pl-6 pr-2 py-1.5 w-fit mt-2 group hover:gap-3 transition-all duration-300"
              >
                <span className="font-medium text-sm text-black">Claim your audit</span>
                <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="#DEDBC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
