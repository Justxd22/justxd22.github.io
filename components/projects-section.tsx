"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedBalls from "@/components/animated-balls"

interface Project {
  id: number
  name: string
  description: string
  techStack: string[]
  thumbnail: string
  date: string
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "AthleteIQ",
    description:
      "Shipping Athlete to sponsors! while keeping thier data private, Using Ai analytics, Secured by OnChain contracts",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    thumbnail: "/ath.png",
    date: "2024",
    link: "https://athlete-iq-nine.vercel.app",
    github: "https://github.com/Justxd22/AthleteIQ",
  },
  {
    id: 2,
    name: "Quizzit",
    description: "Real-time Ai-powered Quizzes off any type of study materials, With a little challenge to push you study like your life depends on it, Secured by onchain contracts",
    techStack: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB"],
    thumbnail: "/quiz.png",
    date: "2023",
    link: "https://quizzit-omega.vercel.app/",
    github: "https://github.com/justxd22/",
  },
  {
    id: 3,
    name: "OnChain Zklogin",
    description:
      "My own ZK login system using Sepoila blockchain, Onchain GKR verfiyer using RUST+Solidity, with onchain custom crypto functions Blake, keccak256, and ethers",
    techStack: ["Vue.js", "Python", "FastAPI", "Redis", "Chart.js"],
    thumbnail: "/zk.png",
    date: "2023",
    link: "https://athlete-iq-nine.vercel.app/login",
    github: "https://github.com/Justxd22/AthleteIQ",
  },
]

export default function ProjectsSection() {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      z: -40,
      scale: 0.9,
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
        delay: custom,
      },
    }),
  }

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          <h2 className="text-6xl font-bold text-white mb-4 font-dmserif">
            Featured <span className="text-teal-300">Projects</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card rounded-[40px] p-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2 + index * 0.1}
            >
              <AnimatedBalls />
              <div className="glass-overlay"></div>

              {/* Date Timeline */}
              {/* <div className="absolute top-6 right-6 z-20">
                <div className="bg-teal-300/20 backdrop-blur-sm rounded-full px-3 py-1 border border-teal-300/30">
                  <span className="text-teal-300 text-sm font-semibold">{project.date}</span>
                </div>
              </div> */}

              <div className="relative z-10 h-full flex flex-col">
                {/* Project Thumbnail */}
                <div className="w-full h-48 rounded-[20px] overflow-hidden mb-4 bg-slate-800/50">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-4xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-slate-300 text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4 ii">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 ii">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-teal-300/20 hover:bg-teal-300/30 backdrop-blur-sm rounded-[20px] px-4 py-2 text-center text-teal-300 text-sm font-semibold border border-teal-300/30 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Live
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-[20px] px-4 py-2 text-center text-white text-sm font-semibold border border-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
