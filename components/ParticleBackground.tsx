'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    particlesJS: any
  }
}

interface ParticleBackgroundProps {
  config?: object
  className?: string
  id?: string
}

export default function ParticleBackground({ 
  config, 
  className = 'bg-black/50',
  id = 'particles-js'
}: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesInitialized = useRef(false)

  useEffect(() => {
    if (particlesInitialized.current) return

    // Import particles.js dynamically
    const initParticles = async () => {
      try {
        // Import the particles.js package
        await import('particles.js')
        
        // Now particlesJS should be available on window
        if (!window.particlesJS) {
          console.error('particlesJS not available on window object')
          return
        }

        // Your custom configuration
        const defaultConfig = {
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 400
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 2.945831623472963,
              random: true,
              anim: {
                enable: true,
                speed: 19.179439640705162,
                size_min: 4.7948599101762905,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          retina_detect: true
        }

        // Use provided config or default config
        const particleConfig = config || defaultConfig

        // Initialize particles with the npm package
        window.particlesJS(id, particleConfig)
        particlesInitialized.current = true
      } catch (error) {
        console.error('Error initializing particles:', error)
      }
    }

    initParticles()

    // Cleanup function
    return () => {
      // The particles.js library doesn't have a built-in destroy method
      // so we clear the canvas manually
      const canvas = document.querySelector(`#${id} canvas`)
      if (canvas) {
        const ctx = (canvas as HTMLCanvasElement).getContext('2d')
        if (ctx) {
          ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
        }
      }
      particlesInitialized.current = false
    }
  }, [config, id])

  return (
    <motion.div 
      ref={containerRef}
      id={id}
      className={className}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden'
      }}
      initial={{ 
        opacity: 0,
        scale: 1.1
      }}
      animate={{ 
        opacity: 1,
        scale: 1
      }}
      transition={{ 
        duration: 2,
        ease: "easeOut",
        delay: 0.5
      }}
    />
  )
}