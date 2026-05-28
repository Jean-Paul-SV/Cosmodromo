import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Experiencias', 'Lanzamientos', 'Galería', 'Historia', 'Contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'bg-[#0a0800]/80 backdrop-blur-md' : ''
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L11.8 7.5H17.5L12.9 11L14.7 16.5L10 13L5.3 16.5L7.1 11L2.5 7.5H8.2L10 2Z" fill="#c9a84c" />
        </svg>
        <span className="font-accent text-xl font-semibold tracking-widest text-gold uppercase">
          Zenith
        </span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className="px-4 py-2 text-sm font-body text-muted-fg hover:text-foreground transition-colors"
          >
            {l}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button className="hidden md:block liquid-glass-gold rounded-full px-6 py-2.5 text-sm font-medium font-body text-gold">
        Reservar Tour
      </button>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-foreground p-1"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="19" y2="7" />
              <line x1="3" y1="13" x2="19" y2="13" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-2 liquid-glass-gold rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l}
                href="#"
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-body text-muted-fg hover:text-foreground transition-colors rounded-xl hover:bg-white/5"
              >
                {l}
              </a>
            ))}
            <button className="mt-2 liquid-glass-gold rounded-full px-6 py-3 text-sm font-medium font-body text-gold">
              Reservar Tour
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
