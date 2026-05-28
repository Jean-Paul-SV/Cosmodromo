import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'

const missions = [
  {
    name: 'Misión Helios I',
    date: '2026-06-15T09:00:00',
    rocket: 'Zenith-9 Heavy',
    payload: 'Satélite de comunicaciones',
    status: 'Próximo',
    statusColor: 'text-gold',
  },
  {
    name: 'Misión Apogeo VII',
    date: '2026-07-03T14:30:00',
    rocket: 'Proton-M',
    payload: 'Carga científica ESA',
    status: 'Programado',
    statusColor: 'text-muted-fg',
  },
  {
    name: 'Misión Stellaris X',
    date: '2026-08-20T06:15:00',
    rocket: 'Zenith-9 Crew',
    payload: 'Tripulación — 4 astronautas',
    status: 'Tripulado',
    statusColor: 'text-[#e8c57a]',
  },
]

function CountdownBlock({ date }) {
  const { days, hours, minutes, seconds } = useCountdown(date)
  const units = [
    { label: 'DÍAS', val: days },
    { label: 'HORAS', val: hours },
    { label: 'MIN', val: minutes },
    { label: 'SEG', val: seconds },
  ]
  return (
    <div className="flex gap-3 mt-4">
      {units.map(({ label, val }) => (
        <div key={label} className="text-center">
          <div className="liquid-glass-subtle rounded-xl px-3 py-2 min-w-[44px]">
            <p className="font-accent text-2xl font-medium text-gold leading-none">
              {String(val).padStart(2, '0')}
            </p>
          </div>
          <p className="text-[9px] text-muted-fg font-body tracking-widest mt-1">{label}</p>
        </div>
      ))}
    </div>
  )
}

export default function Launches() {
  return (
    <section className="bg-surface py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-xs tracking-[0.3em] font-body uppercase mb-4 text-center"
        >
          Calendario
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-accent font-medium tracking-[-2px] text-center text-foreground mb-16"
        >
          Próximos{' '}
          <span className="italic text-gold">lanzamientos</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="liquid-glass-gold rounded-3xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs font-body tracking-widest uppercase ${m.statusColor}`}>
                  ● {m.status}
                </span>
                <span className="text-xs text-muted-fg font-body">{m.rocket}</span>
              </div>
              <h3 className="font-accent text-2xl font-medium text-foreground mb-2">{m.name}</h3>
              <p className="text-sm text-muted-fg font-body mb-1">{m.payload}</p>
              <p className="text-xs text-gold font-body">
                {new Date(m.date).toLocaleDateString('es-ES', {
                  day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
              </p>
              <CountdownBlock date={m.date} />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 w-full liquid-glass-subtle rounded-full py-3 text-sm font-body text-foreground"
              >
                Ver detalles
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
