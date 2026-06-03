import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WordsPullUp } from './WordsPullUp'

const steps = [
  {
    num: '01',
    title: 'We find out why Google is ignoring you.',
    body: "We look at how your business appears on Google right now — what's missing, what's wrong, and exactly why your competitors are showing up ahead of you. Takes 60 seconds to request.",
  },
  {
    num: '02',
    title: 'We fix it. You don\'t lift a finger.',
    body: 'We update everything Google needs to rank your business higher — better photos, more reviews, your business listed on 50+ Australian sites. You keep running your business. We handle the rest.',
  },
  {
    num: '03',
    title: 'Your phone starts ringing more.',
    body: 'When locals search for what you do, your business shows up first. More calls. More bookings. A monthly report in plain language shows you exactly what changed.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary text-[10px] uppercase tracking-widest mb-8">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#101010] rounded-2xl p-6 md:p-8 flex flex-col gap-4"
    >
      <span className="text-gray-600 text-[10px] font-mono">{step.num}</span>
      <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-normal leading-tight">
        <WordsPullUp text={step.title} />
      </h3>
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{step.body}</p>
    </motion.div>
  )
}
