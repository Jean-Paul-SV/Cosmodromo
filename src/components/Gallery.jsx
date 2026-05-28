import { motion } from 'framer-motion'

const items = [
  { seed: 'zenith-launch-1', caption: 'La Plataforma de Lanzamiento', span: 'md:col-span-2' },
  { seed: 'zenith-control', caption: 'Centro de Control', span: '' },
  { seed: 'zenith-rocket', caption: 'Motor Principal Zenith-9', span: '' },
  { seed: 'zenith-night', caption: 'Noche de Lanzamiento', span: '' },
  { seed: 'zenith-crew', caption: 'Sala de la Tripulación', span: 'md:col-span-2' },
]

export default function Gallery() {
  return (
    <section className="bg-background py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-xs tracking-[0.3em] font-body uppercase mb-4 text-center"
        >
          Galería
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-accent font-medium tracking-[-2px] text-center text-foreground mb-16"
        >
          El cosmódromo{' '}
          <span className="italic text-gold">desde adentro</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.seed}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
              style={{ aspectRatio: item.span ? '16/9' : '4/3' }}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/900/600`}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gold overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0800]/90 via-[#0a0800]/20 to-transparent" />
              {/* Gold tint on hover */}
              <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/08 transition-colors duration-500" />
              <p className="absolute bottom-4 left-5 text-sm font-body text-foreground/80 group-hover:text-foreground transition-colors">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
