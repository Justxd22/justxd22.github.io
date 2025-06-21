'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import LoadingAnimation from '@/components/LoadingAnimation'
import ParticleBackground from '@/components/ParticleBackground'
import Header from '@/components/header'
import Image from 'next/image'
import TypingText from '@/components/TypingText'
import AnimatedBalls from '@/components/animated-balls'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import ExperienceSection from '@/components/experience-section'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const eyesCardRef = useRef<HTMLDivElement>(null)

  const socialLinks = [
    { href: "https://github.com/justxd22", src: "/img/github.svg", alt: "GitHub", className: "git" },
    {
      href: "https://discordapp.com/users/578915464064008205",
      src: "/img/discord.svg",
      alt: "Discord",
      className: "discord",
    },
    { href: "https://www.reddit.com/user/_xd22", src: "/img/reddit.svg", alt: "Reddit", className: "redd" },
    { href: "https://t.me/xd2222", src: "/img/telegram.svg", alt: "Telegram", className: "tele" },
    { href: "https://instagram.com/_.xd22", src: "/img/instagram.svg", alt: "Instagram", className: "instagram" },
    { href: "https://twitter.com/_xd222", src: "/img/twitter.svg", alt: "Twitter", className: "tweet" },
    { href: "mailto:xdjust18@gmail.com", src: "/img/envelope.svg", alt: "Email", className: "email" },
    {
      href: "https://linkedin.com/in/noor-amjad-xd",
      src: "/img/linkedin-in.svg",
      alt: "LinkedIn",
      className: "linked",
    },
  ]

  useEffect(() => {
    // Loading timer (4.5s)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setShowContent(true)

    }, 4500)

    // Show content timer (6.8s total)
    const contentTimer = setTimeout(() => {
      setShowParticles(true)
    }, 6800)

    // Mouse tracking for eyes
    const handleTracking = (event) => {
      if (!eyesCardRef.current) return
      
      let eyes = eyesCardRef.current.querySelectorAll('.eye')
      let touches = event.touches
    
      if (!event.touches) {
        // Mouse event
        let clientX = event.clientX
        let clientY = event.clientY
        eyes.forEach(eye => {
          let mouseX = eye.getBoundingClientRect().right
          if (eye.classList.contains("eye-left")) {
            mouseX = eye.getBoundingClientRect().left
          }
          let mouseY = eye.getBoundingClientRect().top
          let radianDegrees = Math.atan2(clientX - mouseX, clientY - mouseY)
          let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180
          eye.style.transform = `rotate(${rotationDegrees}deg)`
        })
      }
      else if (touches?.length === 1) {
        // One finger is touching the screen
        let clientX = touches[0].clientX
        let clientY = touches[0].clientY
        eyes.forEach(eye => {
          let mouseX = eye.getBoundingClientRect().right
          if (eye.classList.contains("eye-left")) {
            mouseX = eye.getBoundingClientRect().left
          }
          let mouseY = eye.getBoundingClientRect().top
          let radianDegrees = Math.atan2(clientX - mouseX, clientY - mouseY)
          let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180
          eye.style.transform = `rotate(${rotationDegrees}deg)`
        })
      } else if (touches.length === 2) {
        // Two fingers are touching the screen
        let eye1 = eyesCardRef.current.querySelector(".eye-left")
        let eye2 = eyesCardRef.current.querySelector(".eye-right")
        let clientX1 = touches[0].clientX
        let clientY1 = touches[0].clientY
        let clientX2 = touches[1].clientX
        let clientY2 = touches[1].clientY
        let mouseX1 = eye1.getBoundingClientRect().right
        let mouseY1 = eye1.getBoundingClientRect().top
        let mouseX2 = eye2.getBoundingClientRect().right
        let mouseY2 = eye2.getBoundingClientRect().top
        let radianDegrees1 = Math.atan2(clientX1 - mouseX1, clientY1 - mouseY1)
        let rotationDegrees1 = radianDegrees1 * (180 / Math.PI) * -1 + 180
        eye1.style.transform = `rotate(${rotationDegrees1}deg)`
        let radianDegrees2 = Math.atan2(clientX2 - mouseX2, clientY2 - mouseY2)
        let rotationDegrees2 = radianDegrees2 * (180 / Math.PI) * -1 + 180
        eye2.style.transform = `rotate(${rotationDegrees2}deg)`
      }
    }

    // Add mouse move listener when content is shown
    if (showContent) {
      document.addEventListener('mousemove', handleTracking)
      document.addEventListener('touchmove', handleTracking)
      document.addEventListener('touchstart', handleTracking)
    }

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(contentTimer)
      document.removeEventListener('mousemove', handleTracking)
      document.removeEventListener('touchmove', handleTracking) 
      document.removeEventListener('touchstart', handleTracking)
    }
  }, [showContent])

  // Animation variants for cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      z: -40,
      scale: 0.9
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      z: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        delay: custom
      }
    }),
  }

  const springAnimation = {
    type: "spring" as const,
    duration: 1,
    delay: 1,
  };

  // Special variant for the last card (eyes card) - appears first
  const lastCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      z: -40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      z: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        delay: 0 // No delay for the last card
      }
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none">
      {!isLoading && <ParticleBackground />}

      </div>
    <div className="w-full overflow-x-hidden text-white font-dmsans">
      <section id="hero">
        {!isLoading && <Header />}

        {/* Cards Section - Only show when not loading */}
        <section className="main-section min-h-screen relative overflow-hidden">
          <div className="relative z-10 container mx-auto px-2 py-30">
            <div className="grid grid-cols-8 grid-rows-5 gap-6 h-[80vh] max-w-7xl max-h-[38rem] m-auto">

              {/* Left Brand Card */}
              <motion.div
                className="col-span-3 row-span-3 glass-card rounded-[80px] p-8 flex flex-col justify-between relative overflow-hidden -mb-35"
                variants={cardVariants}
                initial="hidden"
                animate={showContent ? "visible" : "hidden"}
                custom={0.2}

              >
                <AnimatedBalls />
                <div className="glass-overlay"></div>
                <div className="relative z-10 mt-10 ml-6">
                  <h1 className="text-4xl font-bold text-white mb-2">
                    .<span className="text-teal-300 hh1">xD</span>22
                  </h1>
                  <TypingText />
                </div>
              </motion.div>

              {/* Main Hero Card */}
              <motion.div
                className="col-span-5 row-span-3 glass-card rounded-[80px] p-8 flex items-center justify-between relative overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                animate={showContent ? "visible" : "hidden"}
                custom={1}

              >
                <AnimatedBalls />
                <div className="glass-overlay"></div>
                <div className="relative z-10 font-dmserif">
                  <h2 className="text-7xl font-bold text-white leading-tight">
                    Building Digital
                    <br />
                    <span className="text-slate-300">Experiences.</span>
                  </h2>
                </div>
                <div className="relative z-10">
                  <div className="w-48 h-48 relative">
                    <Image
                      src="/lap.png"
                      alt="3D Laptop Illustration"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Contact Card - Overlapping with Brand Card */}
              <motion.div
                className="col-span-3 row-span-1 glass-card rounded-[80px] p-6 flex flex-col justify-center relative overflow-hidden -mt-15 -mb-30 z-20 rounded-tl-none"
                variants={cardVariants}
                initial="hidden"
                animate={showContent ? "visible" : "hidden"}
                custom={1.3}
              >
                <AnimatedBalls />
                <div className="glass-overlay"></div>
                <div className="relative z-10 flex h-full w-full flex-col justify-between gap-4 ml-6">
                  <div>
                    <p className="text-slate-300 text-base mb-2">Have some</p>
                    <p className="text-slate-300 mb-4 text-base font-black">questions?</p>
                  </div>
                  <h3 className="text-6xl font-bold text-white">Contact me</h3>
                </div>
              </motion.div>

              {/* Social Links Card */}
              <motion.div
                className="col-span-3 row-span-2 glass-card rounded-[40px] p-6 flex items-center justify-center relative overflow-hidden mb-12 -mr-17"
                variants={cardVariants}
                initial="hidden"
                animate={showContent ? "visible" : "hidden"}
                custom={1.8}
              >
                <AnimatedBalls />
                <div className="glass-overlay"></div>
                <div className="relative z-10 flex items-center gap-3 flex-wrap justify-center scale-130">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={link.src || "/placeholder.svg"}
                        alt={link.alt}
                        width={32}
                        height={32}
                        className={`social ${link.className} filter brightness-0 invert`}
                      />
                    </motion.a>
                  ))}

                  <motion.a
                    href="https://youtu.be/F2YpXC1itEE?t=24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <Image
                        src="/img/PEDRO_xD.png"
                        alt="Pedro the raccoon 2024 meme"
                        width={32}
                        height={32}
                        className="pedroo rounded-full"
                      />
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              {/* Eyes Card - This appears FIRST (no delay) */}
              <motion.div

                ref={eyesCardRef}
                className="col-span-2 row-span-2 rounded-[80px] p-6 flex items-center justify-center relative overflow-hidden ml-15 mb-5"
                variants={lastCardVariants}
                initial={{ translateX: -550, translateY: -300 }}
                animate={{ translateX: 0, translateY: 0 }}
                transition={{ ...springAnimation, delay: 4 }}
              >
                {!isLoading && (

                  <div className="glass-overlay glass-card"></div>

                )}
                <motion.div
                  className="catt"
                  initial={{ width: 200, height: 200 }}
                  animate={{ width: 140, height: 140 }}
                  transition={{ ...springAnimation, delay: 4 }}
                >
                  <div className="face">
                    {/* Mouth */}
                    <Image
                      src="/img/mouth.svg"
                      alt="mouth"
                      width={31}
                      height={100}
                      className="mouth preventSelect"
                    />

                    {/* Eyes */}
                    <div>
                      <div className="eye eye-left preventSelect eyein">
                        <div className="eye-inner">
                          <div className="eyeafter"></div>
                        </div>
                      </div>
                      <div className="eye eye-right preventSelect eyein">
                        <div className="eye-inner">
                          <div className="eyeafter"></div>
                        </div>
                      </div>

                      {/* Muzzle */}
                      <div className="muzzle"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {isLoading && (
          <div className="cat-loader-container">
            <div className="cat-wrapper">
              <div className="progress mt-58">
                <div className="progress-value"></div>
              </div>
            </div>
          </div>
        )}
      </section>

      {!isLoading && (
        <>

            <section id="About">
              <AboutSection/>
            </section>

      <section id="Projects">
        <ProjectsSection/>
      </section>


      <section id="exp">
        <ExperienceSection/>
      </section>

      

      <section id="proj">
        <ContactSection/>
      </section>
      </>
      )}

      {/* <section id="skills">
        <SkillsSection/>
      </section> */}

    </div>
    </>
  )
}