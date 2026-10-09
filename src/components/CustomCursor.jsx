import { useEffect, useRef } from 'react'

function CustomCursor() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (event) => {
      glow.style.transform = `translate3d(${event.clientX - 130}px, ${event.clientY - 130}px, 0)`
      glow.classList.add('is-visible')
    }

    const handleMouseLeave = () => {
      glow.classList.remove('is-visible')
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="custom-cursor-glow"
      ref={glowRef}
      aria-hidden="true"
    />
  )
}

export default CustomCursor