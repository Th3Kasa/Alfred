import { motion, MotionValue, useTransform } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  scrollProgress: MotionValue<number>
  index: number
  totalChars: number
}

export function AnimatedLetter({ char, scrollProgress, index, totalChars }: AnimatedLetterProps) {
  const charProgress = index / totalChars
  const opacity = useTransform(
    scrollProgress,
    [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)],
    [0.2, 1]
  )
  return (
    <motion.span style={{ opacity }} className="whitespace-pre">
      {char}
    </motion.span>
  )
}
