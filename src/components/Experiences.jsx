import { motion } from 'framer-motion'

const tours = [
  {
    name: 'Tour Aurora',
    tagline: 'La puerta a las estrellas',
    price: '€199',
    duration: '4 horas',
    color: 'from-[#1a1508] to-[#0a0800]',
    features: [
      'Acceso a la plataforma de observación',
      'Guía especializado en astrofísica',
      'Museo de historia espacial',
      'Kit fotográfico profesional',
      'Certificado de experiencia',
    ],
    cta: 'Reservar Aurora',
    highlight: false,
  },
  {
    name: 'Tour Apogeo',
    tagline: 'La experiencia VIP definitiva',
    price: '€499',
    duration: '8 horas',
    color: 'from-[#2a1f04] to-[#120f02]',
    features: [
      'Acceso pre-lanzamiento a zona restringida',
      'Reunión con ingenieros del cohete',
      'Sala de control VIP durante el lanzamiento',
      'Cena de gala en el centro espacial',
      'Traje de astronauta para fotos',
      'Transmisión en vivo para familiares',
    ],
    cta: 'Reservar Apogeo',
    highlight: true,
  },
  {
    name: 'Tour Zenith',
    tagline: 'Exclusividad absoluta',
    price: '€999',
    duration: '2 días',
    color: 'from-[#1a1508] to-[#0a0800]',
    features: [
      'Acceso privado con grupo reducido (máx. 6 personas)',
      'Simulador de lanzamiento de alta fidelidad',
      'Noche en el complejo de la tripulación',
      'Sesión con cosmonauta activo',
      'Sobrevuelo en helicóptero del cosmódromo',
      'Recuerdo de pieza real de cohete certificada',
    ],
    cta: 'Reservar Zenith',
    highlight: false,
  },
]

export default function Experiences() {
  return (
    <section className="bg-background py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-xs tracking-[0.3em] font-body uppercase mb-4 text-center"
        >
          Experiencias
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-accent font-medium tracking-[-2px] text-center text-foreground mb-4"
        >
          Elige tu{' '}
          <span className="italic text-gold">aventura</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-fg text-center max-w-xl mx-auto mb-16 font-body"
        >
          Desde una visita al cosmódromo hasta dos días de inmersión total con la tripulación.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative liquid-glass-gold rounded-3xl p-8 flex flex-col ${
                tour.highlight ? 'scale-[1.03] md:scale-[1.04]' : ''
              }`}
            >
              {tour.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background text-[10px] font-medium tracking-widest uppercase rounded-full px-4 py-1 font-body">
                  Más popular
                </div>
              )}
              <p className="text-xs text-gold tracking-[0.2em] font-body uppercase mb-3">{tour.duration}</p>
              <h3 className="font-accent text-2xl font-medium text-foreground mb-1">{tour.name}</h3>
              <p className="text-muted-fg text-sm font-body mb-6">{tour.tagline}</p>
              <p className="font-accent text-5xl font-medium text-gold mb-8">{tour.price}</p>

              <ul className="flex-1 space-y-3 mb-8">
                {tour.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-body text-muted-fg">
                    <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full rounded-full py-3.5 text-sm font-medium font-body tracking-wide transition-colors ${
                  tour.highlight
                    ? 'bg-gold text-background'
                    : 'liquid-glass-subtle text-foreground'
                }`}
              >
                {tour.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
