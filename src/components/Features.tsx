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

function LearnMore() {
  return (
    <a href="#" className="flex items-center gap-1 text-primary text-xs sm:text-sm mt-4 group">
      Learn more
      <ArrowRight
        className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ transform: 'rotate(-45deg)' }}
      />
    </a>
  )
}

export function Features() {
  return (
    <section className="relative min-h-screen bg-black py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Studio-grade workflows for visionary creators.',
                className: 'text-primary',
              },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Built for pure vision. Powered by art.',
                className: 'text-gray-500',
              },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        {/* 4-col card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Card 1 — Video */}
          <FeatureCard index={0}>
            <div className="relative flex-1 min-h-[280px] lg:min-h-0">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[#E1E0CC] text-sm sm:text-base font-medium">
                  Your creative canvas.
                </p>
              </div>
            </div>
          </FeatureCard>

          {/* Card 2 — Project Storyboard */}
          <FeatureCard index={1}>
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-4 object-cover"
                />
                <p className="text-gray-500 text-[10px] mb-1">01</p>
                <h3 className="text-primary font-medium text-base sm:text-lg mb-4">
                  Project Storyboard.
                </h3>
                <div className="flex flex-col gap-2">
                  <CheckItem text="Visual scene sequencing and story mapping" />
                  <CheckItem text="Drag-and-drop shot arrangement" />
                  <CheckItem text="Real-time collaboration with your team" />
                  <CheckItem text="Export to PDF or presentation formats" />
                </div>
              </div>
              <LearnMore />
            </div>
          </FeatureCard>

          {/* Card 3 — Smart Critiques */}
          <FeatureCard index={2}>
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-4 object-cover"
                />
                <p className="text-gray-500 text-[10px] mb-1">02</p>
                <h3 className="text-primary font-medium text-base sm:text-lg mb-4">
                  Smart Critiques.
                </h3>
                <div className="flex flex-col gap-2">
                  <CheckItem text="AI-powered visual analysis and feedback" />
                  <CheckItem text="Timestamped creative notes and annotations" />
                  <CheckItem text="Seamless tool integrations" />
                </div>
              </div>
              <LearnMore />
            </div>
          </FeatureCard>

          {/* Card 4 — Immersion Capsule */}
          <FeatureCard index={3}>
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-4 object-cover"
                />
                <p className="text-gray-500 text-[10px] mb-1">03</p>
                <h3 className="text-primary font-medium text-base sm:text-lg mb-4">
                  Immersion Capsule.
                </h3>
                <div className="flex flex-col gap-2">
                  <CheckItem text="Notification silencing during deep work sessions" />
                  <CheckItem text="Ambient soundscapes tailored to your workflow" />
                  <CheckItem text="Automatic schedule syncing and focus blocks" />
                </div>
              </div>
              <LearnMore />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
