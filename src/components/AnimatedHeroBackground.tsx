'use client'

import React, { useEffect, useRef } from 'react'

const AnimatedHeroBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Asegurarse de que el video se reproduce automáticamente cuando está listo
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error reproduciendo el video:", error)
      })
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video de fondo con reproducción automática en bucle */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video1.mp4" type="video/mp4" />
        {/* Fallback por si el navegador no soporta el formato de video */}
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* Overlay para oscurecer ligeramente el video y mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  )
}

export default AnimatedHeroBackground