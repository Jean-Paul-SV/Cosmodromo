import { motion } from 'framer-motion'
import ScrollRevealText from './ScrollRevealText'

const stats = [
  { value: '47', label: 'Lanzamientos exitosos' },
  { value: '120K+', label: 'Visitantes al año' },
  { value: '12', label: 'Países participantes' },
  { value: '99.8%', label: 'Tasa de éxito' },
]

export default function About() {
  return (
    <section className="bg-background py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-xs tracking-[0.3em] font-body uppercase mb-12 text-center"
        >
          Nuestra historia
        </motion.p>

        <ScrollRevealText
          text="Desde las estepas de Kazajistán hasta el horizonte del universo conocido, el Cosmódromo Zenith lleva a la humanidad más allá de sus límites. Cada lanzamiento es una victoria de la ingeniería, el coraje y el sueño colectivo de explorar lo desconocido."
          className="text-3xl md:text-4xl lg:text-5xl font-accent font-medium leading-relaxed tracking-[-1px] text-center"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="liquid-glass-subtle rounded-2xl p-6 text-center"
            >
              <p className="font-accent text-4xl font-medium text-gold mb-2">{s.value}</p>
              <p className="text-xs text-muted-fg font-body tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
