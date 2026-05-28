import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const color = useTransform(progress, range, ['#6b5a30', '#f5e6c0'])
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  )
}

export default function ScrollRevealText({ text, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.25'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {word}
        </Word>
      ))}
    </p>
  )
}
