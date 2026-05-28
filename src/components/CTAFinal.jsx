import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Starfield from './Starfield'

export default function CTAFinal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <Starfield />

      {/* Center gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 35%, transparent 65%)',
        }}
      />

      {/* Top/bottom fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-[1]" />

      {/* Content */}
      <motion.div style={{ y }} className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-xs tracking-[0.3em] font-body uppercase mb-8"
        >
          ¿Listo para despegar?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-5xl md:text-6xl lg:text-7xl font-accent font-medium tracking-[-2px] text-foreground mb-6 leading-[0.95]"
        >
          Sé testigo de{' '}
          <span className="italic gold-shimmer">la historia</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-fg font-body mb-10 text-lg leading-relaxed"
        >
          Plazas limitadas. Cada lanzamiento es único e irrepetible.
          <br />Reserva hoy y garantiza tu lugar en la historia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gold text-background rounded-full px-12 py-4 text-sm font-medium font-body tracking-widest uppercase"
          >
            Reservar ahora
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="liquid-glass-gold rounded-full px-12 py-4 text-sm font-medium font-body text-foreground tracking-widest uppercase"
          >
            Contactar
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
