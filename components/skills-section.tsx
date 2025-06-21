"use client"
import { motion } from "framer-motion"
import AnimatedBalls from "@/components/animated-balls"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "React", level: 92, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Vue.js", level: 85, category: "Frontend" },
  { name: "Node.js", level: 87, category: "Backend" },
  { name: "Python", level: 83, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 85, category: "Database" },
  { name: "Docker", level: 78, category: "DevOps" },
  { name: "AWS", level: 75, category: "DevOps" },
  { name: "Git", level: 90, category: "Tools" },
]

const categories = ["Frontend", "Backend", "Database", "DevOps", "Tools"]

export default function SkillsSection() {
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
            Skills & <span className="text-teal-300">Expertise</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className="mb-12"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2 + categoryIndex * 0.1}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="glass-card rounded-[20px] p-6 relative overflow-hidden"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={0.3 + skillIndex * 0.05}
                    >
                      <AnimatedBalls />
                      <div className="glass-overlay"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                          <span className="text-teal-300 text-sm font-bold">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-teal-300 to-teal-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
