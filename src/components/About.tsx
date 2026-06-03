import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'
import { AnimatedLetter } from './AnimatedLetter'

const PARAGRAPH = "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."

export function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = PARAGRAPH.split('')
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="bg-[#101010] max-w-6xl mx-auto rounded-3xl px-6 py-12 md:px-12 md:py-16 text-center">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-6">Visual arts</p>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Marcus Chen,', className: 'font-normal' },
              { text: 'a self-taught director.', className: 'italic font-serif' },
              { text: 'I have skills in color grading, visual effects, and narrative design.', className: 'font-normal' },
            ]}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] sm:leading-[0.9]"
          />
        </div>
        <p ref={paragraphRef} className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#DEDBC8', lineHeight: 1.6 }}>
          {chars.map((char, i) => (
            <AnimatedLetter key={i} char={char} scrollProgress={scrollYProgress} index={i} totalChars={chars.length} />
          ))}
        </p>
      </div>
    </section>
  )
}
