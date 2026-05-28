const cols = [
  {
    title: 'Experiencias',
    links: ['Tour Aurora', 'Tour Apogeo', 'Tour Zenith', 'Tours Corporativos', 'Escuelas'],
  },
  {
    title: 'Cosmódromo',
    links: ['Historia', 'Tecnología', 'Sostenibilidad', 'Seguridad', 'Prensa'],
  },
  {
    title: 'Conectar',
    links: ['Instagram', 'YouTube', 'Twitter / X', 'LinkedIn', 'Newsletter'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[rgba(201,168,76,0.15)] px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L11.8 7.5H17.5L12.9 11L14.7 16.5L10 13L5.3 16.5L7.1 11L2.5 7.5H8.2L10 2Z" fill="#c9a84c" />
              </svg>
              <span className="font-accent text-lg font-semibold tracking-widest text-gold uppercase">Zenith</span>
            </div>
            <p className="text-muted-fg text-sm font-body leading-relaxed max-w-[200px]">
              El cosmódromo turístico de referencia mundial. Donde la humanidad toca las estrellas.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-foreground text-xs font-body font-medium tracking-widest uppercase mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-muted-fg text-sm font-body hover:text-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(201,168,76,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-fg text-xs font-body">
            © 2026 Cosmódromo Zenith. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['Privacidad', 'Términos', 'Cookies'].map((l) => (
              <a key={l} href="#" className="text-muted-fg text-xs font-body hover:text-gold transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
