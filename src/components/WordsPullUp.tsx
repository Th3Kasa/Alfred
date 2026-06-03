import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
}

export function WordsPullUp({ text, className = '', showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')
  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="relative inline-block">
                {word}
                {isLast && showAsterisk && (
                  <span className="absolute text-[0.31em]" style={{ top: '0.65em', right: '-0.3em' }}>*</span>
                )}
              </span>
              {i < words.length - 1 && ' '}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
