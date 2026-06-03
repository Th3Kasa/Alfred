import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  containerClassName?: string
}

export function WordsPullUpMultiStyle({ segments, containerClassName = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const allWords: { word: string; wordClass: string }[] = []
  segments.forEach((seg) => {
    const words = seg.text.trim().split(/\s+/).filter(Boolean)
    words.forEach((word) => {
      allWords.push({ word, wordClass: seg.className || '' })
    })
  })

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center gap-x-[0.3em] gap-y-0 ${containerClassName}`}>
      {allWords.map(({ word, wordClass }, i) => (
        <span key={i} className="overflow-hidden">
          <motion.span
            className={`inline-block ${wordClass}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}
