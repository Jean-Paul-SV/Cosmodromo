import { motion } from 'framer-motion'
import Starfield from './Starfield'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-nebula bg-background" />
      <Starfield />

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div {...fadeUp(0.2)} className="inline-flex items-center gap-2 mb-8">
          <span className="liquid-glass-subtle rounded-full px-5 py-2 text-xs font-body tracking-[0.2em] text-gold uppercase">
            Cosmódromo Zenith — Est. 2019
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 {...fadeUp(0.4)} className="mb-6">
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-accent font-medium text-foreground leading-[0.95] tracking-[-2px]">
            Sé testigo
          </span>
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-accent italic font-medium leading-[0.95] tracking-[-2px] gold-shimmer mt-2">
            de lo imposible
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-base md:text-lg text-muted-fg font-body max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Vive el lanzamiento desde metros del cohete. Una experiencia que
          transforma tu comprensión del universo para siempre.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.8)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gold text-background rounded-full px-10 py-4 text-sm font-medium font-body tracking-wide"
          >
            RESERVAR EXPERIENCIA
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="liquid-glass-gold rounded-full px-10 py-4 text-sm font-medium font-body text-foreground tracking-wide"
          >
            VER LANZAMIENTOS
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.25em] text-muted-fg font-body uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M8 2v14M2 10l6 8 6-8" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
