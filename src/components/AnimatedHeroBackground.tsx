'use client'

import React from 'react'
import Image from 'next/image'

const AnimatedHeroBackground: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {/* Imagen de fondo estática */}
      <div className="absolute inset-0">
        <Image 
          src="/image1.png" 
          alt="TokeNatura Hero Background" 
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Overlay para oscurecer ligeramente la imagen */}
        <div className="absolute inset-0 bg-black/35"></div>
      </div>
    </div>
  )
}

export default AnimatedHeroBackground