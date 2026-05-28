import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 320 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.00008 + 0.00002,
      opacity: Math.random() * 0.7 + 0.3,
      opDir: Math.random() > 0.5 ? 1 : -1,
      opSpeed: Math.random() * 0.004 + 0.001,
      gold: Math.random() > 0.75,
    }))

    const shootingStars = []
    const spawnShooter = () => {
      if (shootingStars.length < 2 && Math.random() > 0.985) {
        shootingStars.push({
          x: Math.random(),
          y: Math.random() * 0.5,
          len: Math.random() * 0.08 + 0.04,
          speed: Math.random() * 0.006 + 0.004,
          opacity: 1,
          angle: Math.PI / 5,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((s) => {
        s.opacity += s.opDir * s.opSpeed
        if (s.opacity > 1) { s.opacity = 1; s.opDir = -1 }
        if (s.opacity < 0.1) { s.opacity = 0.1; s.opDir = 1 }
        s.y += s.speed
        if (s.y > 1) { s.y = 0; s.x = Math.random() }

        ctx.beginPath()
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.gold
          ? `rgba(201,168,76,${s.opacity * 0.8})`
          : `rgba(245,230,192,${s.opacity})`
        ctx.fill()
      })

      spawnShooter()
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i]
        const x1 = ss.x * canvas.width
        const y1 = ss.y * canvas.height
        const x2 = x1 + Math.cos(ss.angle) * ss.len * canvas.width
        const y2 = y1 + Math.sin(ss.angle) * ss.len * canvas.height
        const grad = ctx.createLinearGradient(x1, y1, x2, y2)
        grad.addColorStop(0, `rgba(240,208,128,${ss.opacity})`)
        grad.addColorStop(1, 'rgba(240,208,128,0)')
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()
        ss.x += Math.cos(ss.angle) * ss.speed
        ss.y += Math.sin(ss.angle) * ss.speed
        ss.opacity -= 0.018
        if (ss.opacity <= 0) shootingStars.splice(i, 1)
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
