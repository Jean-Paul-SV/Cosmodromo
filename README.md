# Cosmódromo

Sitio web espacial interactivo construido con React, JavaScript y Framer Motion. Desplegado en GitHub Pages.

## Vista general

Cosmódromo es una experiencia web inmersiva con temática de exploración espacial. Incluye animaciones al hacer scroll, una galería multimedia, sección de lanzamientos y una cuenta regresiva en tiempo real.

## Tecnologías

- **React** + **JavaScript**
- **Vite** — entorno de desarrollo
- **Tailwind CSS** — estilos
- **Framer Motion** — animaciones
- **GitHub Pages** — despliegue

## Componentes principales

| Componente | Descripción |
|---|---|
| `Hero` | Pantalla de bienvenida con fondo estrellado animado |
| `Starfield` | Canvas con campo de estrellas generado proceduralmente |
| `About` | Sección de misión y contexto del proyecto |
| `Experiences` | Timeline de hitos espaciales |
| `Gallery` | Galería de imágenes con layout masonry |
| `Launches` | Listado de lanzamientos con detalles |
| `ScrollRevealText` | Texto que aparece progresivamente al hacer scroll |
| `CTAFinal` | Sección final de llamada a la acción |
| `Navbar` | Navegación fija con links de sección |
| `Footer` | Pie de página |

## Hook personalizado

### `useCountdown`

Cuenta regresiva en tiempo real hacia una fecha objetivo. Retorna `{ days, hours, minutes, seconds }` actualizados cada segundo via `setInterval`.

## Inicio rápido

```bash
npm install
npm run dev
```

## Despliegue

El sitio se despliega automáticamente en GitHub Pages. Para build manual:

```bash
npm run build
npm run deploy
```

## Estructura del proyecto

```
src/
├── components/
│   ├── About.jsx
│   ├── CTAFinal.jsx
│   ├── Experiences.jsx
│   ├── Footer.jsx
│   ├── Gallery.jsx
│   ├── Hero.jsx
│   ├── Launches.jsx
│   ├── Navbar.jsx
│   ├── ScrollRevealText.jsx
│   └── Starfield.jsx
├── hooks/
│   └── useCountdown.js
├── App.jsx
└── main.jsx
```

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa local
npm run deploy   # Publicar en GitHub Pages
```